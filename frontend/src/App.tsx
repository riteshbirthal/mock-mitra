import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ExamList from './pages/ExamList';
import MockTest from './pages/MockTest';
import Results from './pages/Results';
import ContentList from './pages/ContentList';
import ContentView from './pages/ContentView';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exams" element={<ExamList />} />
            <Route path="/exam/:examId" element={<MockTest />} />
            <Route path="/results" element={<Results />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
            <Route path="/content" element={<ContentList />} />
            <Route path="/content/:contentId" element={<ContentView />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Mock-Mitra. All rights reserved.</p>
            <p className="footer-tagline">Your trusted companion for exam preparation</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
