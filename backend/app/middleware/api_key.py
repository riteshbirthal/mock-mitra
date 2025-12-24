from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from app.config import API_KEY


class APIKeyMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Skip API key check for CORS preflight and docs
        if request.method == "OPTIONS":
            return await call_next(request)
        
        if request.url.path in ["/", "/docs", "/redoc", "/openapi.json"]:
            return await call_next(request)

        api_key = request.headers.get("X-API-Key")
        
        if not api_key:
            return JSONResponse(
                status_code=401,
                content={"detail": "API Key missing. Include 'X-API-Key' header."}
            )
        
        if api_key != API_KEY:
            return JSONResponse(
                status_code=403,
                content={"detail": "Invalid API Key"}
            )
        
        return await call_next(request)
