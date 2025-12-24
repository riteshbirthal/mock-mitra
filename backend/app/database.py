from pymongo import MongoClient
from app.config import MONGODB_URL, DATABASE_NAME

client = MongoClient(MONGODB_URL)
db = client[DATABASE_NAME]

questions_collection = db["questions"]
exams_collection = db["exams"]
content_collection = db["content"]
results_collection = db["results"]
subjects_collection = db["subjects"]


def init_sample_data():
    """Initialize database with sample data if empty"""
    
    if exams_collection.count_documents({}) == 0:
        exams = [
            {
                "_id": "ssc", 
                "name": "SSC CGL", 
                "description": "Staff Selection Commission - Combined Graduate Level", 
                "icon": "📋", 
                "duration": 60, 
                "total_questions": 25,
                "question_sources": [
                    {"collection": "computer_awareness", "categories": []},
                    {"collection": "mathematics", "categories": []}
                ]
            },
            {
                "_id": "banking", 
                "name": "Banking", 
                "description": "IBPS PO, SBI PO, RBI Grade B", 
                "icon": "🏦", 
                "duration": 45, 
                "total_questions": 20,
                "question_sources": [
                    {"collection": "computer_awareness", "categories": []},
                    {"collection": "mathematics", "categories": []}
                ]
            },
            {
                "_id": "railway", 
                "name": "Railway", 
                "description": "RRB NTPC, Group D, JE", 
                "icon": "🚂", 
                "duration": 60, 
                "total_questions": 25,
                "question_sources": [
                    {"collection": "computer_awareness", "categories": []},
                    {"collection": "mathematics", "categories": []}
                ]
            },
            {
                "_id": "upsc", 
                "name": "UPSC", 
                "description": "Civil Services Preliminary Examination", 
                "icon": "🏛️", 
                "duration": 90, 
                "total_questions": 30,
                "question_sources": [
                    {"collection": "computer_awareness", "categories": []},
                    {"collection": "mathematics", "categories": []}
                ]
            },
            {
                "_id": "state_psc", 
                "name": "State PSC", 
                "description": "State Public Service Commission Exams", 
                "icon": "📜", 
                "duration": 60, 
                "total_questions": 25,
                "question_sources": [
                    {"collection": "computer_awareness", "categories": []},
                    {"collection": "mathematics", "categories": []}
                ]
            },
            {
                "_id": "defence", 
                "name": "Defence", 
                "description": "NDA, CDS, AFCAT", 
                "icon": "🎖️", 
                "duration": 60, 
                "total_questions": 25,
                "question_sources": [
                    {"collection": "computer_awareness", "categories": []},
                    {"collection": "mathematics", "categories": []}
                ]
            },
        ]
        exams_collection.insert_many(exams)

    if questions_collection.count_documents({}) == 0:
        questions = [
            # SSC Questions
            {"exam_id": "ssc", "question": "What is the capital of India?", "options": ["Mumbai", "New Delhi", "Kolkata", "Chennai"], "correct": 1, "explanation": "New Delhi is the capital of India since 1911.", "category": "General Knowledge"},
            {"exam_id": "ssc", "question": "Who wrote the Indian National Anthem?", "options": ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"], "correct": 1, "explanation": "Jana Gana Mana was written by Rabindranath Tagore.", "category": "General Knowledge"},
            {"exam_id": "ssc", "question": "What is 15% of 200?", "options": ["20", "25", "30", "35"], "correct": 2, "explanation": "15% of 200 = (15/100) × 200 = 30", "category": "Mathematics"},
            {"exam_id": "ssc", "question": "Find the next number: 2, 6, 12, 20, ?", "options": ["28", "30", "32", "36"], "correct": 1, "explanation": "Pattern: differences are 4, 6, 8, 10. Next: 20 + 10 = 30", "category": "Reasoning"},
            {"exam_id": "ssc", "question": "Choose the correctly spelled word:", "options": ["Accomodation", "Accommodation", "Acomodation", "Acommodation"], "correct": 1, "explanation": "Accommodation is the correct spelling with double 'c' and double 'm'.", "category": "English"},
            {"exam_id": "ssc", "question": "The Preamble of Indian Constitution declares India as:", "options": ["Federal Republic", "Unitary State", "Sovereign Socialist Secular Democratic Republic", "Parliamentary Democracy"], "correct": 2, "explanation": "The Preamble declares India as a Sovereign Socialist Secular Democratic Republic.", "category": "Polity"},
            {"exam_id": "ssc", "question": "Which river is known as 'Sorrow of Bihar'?", "options": ["Ganga", "Kosi", "Son", "Gandak"], "correct": 1, "explanation": "Kosi is called the 'Sorrow of Bihar' due to frequent floods.", "category": "Geography"},
            {"exam_id": "ssc", "question": "If A:B = 2:3 and B:C = 4:5, find A:C", "options": ["8:15", "6:10", "2:5", "4:9"], "correct": 0, "explanation": "A:B:C = 8:12:15, so A:C = 8:15", "category": "Mathematics"},
            {"exam_id": "ssc", "question": "Select the antonym of 'Benevolent':", "options": ["Kind", "Generous", "Malevolent", "Caring"], "correct": 2, "explanation": "Malevolent (wishing harm) is opposite of Benevolent (kind).", "category": "English"},
            {"exam_id": "ssc", "question": "Who is the Father of Indian Constitution?", "options": ["Jawaharlal Nehru", "B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"], "correct": 1, "explanation": "Dr. B.R. Ambedkar is known as the Father of Indian Constitution.", "category": "Polity"},
            
            # Banking Questions
            {"exam_id": "banking", "question": "RBI was nationalized in which year?", "options": ["1935", "1947", "1949", "1951"], "correct": 2, "explanation": "RBI was nationalized on January 1, 1949.", "category": "Banking Awareness"},
            {"exam_id": "banking", "question": "What is the full form of NEFT?", "options": ["National Electronic Fund Transfer", "New Electronic Fund Transfer", "National Easy Fund Transfer", "None of these"], "correct": 0, "explanation": "NEFT stands for National Electronic Fund Transfer.", "category": "Banking Awareness"},
            {"exam_id": "banking", "question": "Calculate Simple Interest on Rs. 5000 at 8% for 2 years:", "options": ["Rs. 600", "Rs. 800", "Rs. 1000", "Rs. 400"], "correct": 1, "explanation": "SI = (5000 × 8 × 2)/100 = Rs. 800", "category": "Quantitative Aptitude"},
            {"exam_id": "banking", "question": "If 6 men can do a work in 12 days, in how many days can 9 men do it?", "options": ["6 days", "8 days", "10 days", "18 days"], "correct": 1, "explanation": "Men and days are inversely proportional. 6×12 = 9×x, x = 8 days", "category": "Quantitative Aptitude"},
            {"exam_id": "banking", "question": "What is the headquarters of RBI?", "options": ["New Delhi", "Mumbai", "Kolkata", "Chennai"], "correct": 1, "explanation": "RBI headquarters is in Mumbai.", "category": "Banking Awareness"},
            {"exam_id": "banking", "question": "SWIFT code contains how many characters?", "options": ["8 or 11", "10 or 12", "9 or 11", "8 or 10"], "correct": 0, "explanation": "SWIFT code has either 8 or 11 alphanumeric characters.", "category": "Banking Awareness"},
            {"exam_id": "banking", "question": "Find the odd one out: 2, 5, 10, 17, __(26)__, 37", "options": ["24", "26", "28", "25"], "correct": 1, "explanation": "Pattern: +3, +5, +7, +9, +11. The number at blank is 26.", "category": "Reasoning"},
            {"exam_id": "banking", "question": "What is Repo Rate?", "options": ["Rate at which RBI borrows from banks", "Rate at which RBI lends to banks", "Interest rate on savings", "Loan rate"], "correct": 1, "explanation": "Repo Rate is the rate at which RBI lends money to commercial banks.", "category": "Banking Awareness"},

            # Railway Questions  
            {"exam_id": "railway", "question": "When was Indian Railways established?", "options": ["1853", "1857", "1947", "1950"], "correct": 0, "explanation": "Indian Railways was established in 1853.", "category": "Railway GK"},
            {"exam_id": "railway", "question": "What is the fastest train in India?", "options": ["Rajdhani Express", "Shatabdi Express", "Vande Bharat Express", "Duronto Express"], "correct": 2, "explanation": "Vande Bharat Express is currently the fastest train in India.", "category": "Railway GK"},
            {"exam_id": "railway", "question": "Headquarters of Northern Railway is at:", "options": ["Mumbai", "New Delhi", "Kolkata", "Chennai"], "correct": 1, "explanation": "Northern Railway headquarters is in New Delhi.", "category": "Railway GK"},
            {"exam_id": "railway", "question": "A train 150m long passes a pole in 15 seconds. Find its speed:", "options": ["36 km/hr", "40 km/hr", "45 km/hr", "50 km/hr"], "correct": 0, "explanation": "Speed = 150/15 = 10 m/s = 10 × 18/5 = 36 km/hr", "category": "Mathematics"},
            {"exam_id": "railway", "question": "Which zone has the largest route kilometers?", "options": ["Northern Railway", "Western Railway", "Central Railway", "Southern Railway"], "correct": 0, "explanation": "Northern Railway has the largest route kilometers.", "category": "Railway GK"},
            {"exam_id": "railway", "question": "IRCTC stands for:", "options": ["Indian Railway Catering and Tourism Corporation", "Indian Railway Central Tourism Corporation", "Indian Rail Catering and Travel Company", "None of these"], "correct": 0, "explanation": "IRCTC = Indian Railway Catering and Tourism Corporation", "category": "Railway GK"},

            # UPSC Questions
            {"exam_id": "upsc", "question": "Article 370 was related to which state?", "options": ["Punjab", "Jammu & Kashmir", "Himachal Pradesh", "Uttarakhand"], "correct": 1, "explanation": "Article 370 granted special autonomous status to Jammu & Kashmir.", "category": "Polity"},
            {"exam_id": "upsc", "question": "Who appoints the Chief Election Commissioner?", "options": ["Prime Minister", "President", "Parliament", "Chief Justice"], "correct": 1, "explanation": "The President of India appoints the Chief Election Commissioner.", "category": "Polity"},
            {"exam_id": "upsc", "question": "The Indus Valley Civilization was discovered in:", "options": ["1921", "1922", "1920", "1925"], "correct": 0, "explanation": "Indus Valley Civilization was discovered in 1921 at Harappa.", "category": "History"},
            {"exam_id": "upsc", "question": "Which is the longest river in India?", "options": ["Yamuna", "Brahmaputra", "Ganga", "Godavari"], "correct": 2, "explanation": "Ganga is the longest river in India (2525 km).", "category": "Geography"},
            {"exam_id": "upsc", "question": "First Five Year Plan was based on:", "options": ["Mahalanobis Model", "Harrod-Domar Model", "Gandhian Model", "None"], "correct": 1, "explanation": "First Five Year Plan was based on Harrod-Domar Model.", "category": "Economics"},
            {"exam_id": "upsc", "question": "What is the minimum age to become President of India?", "options": ["30 years", "35 years", "40 years", "25 years"], "correct": 1, "explanation": "Minimum age to become President is 35 years.", "category": "Polity"},

            # State PSC Questions
            {"exam_id": "state_psc", "question": "Which state has the longest coastline?", "options": ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"], "correct": 1, "explanation": "Gujarat has the longest coastline of about 1600 km.", "category": "Geography"},
            {"exam_id": "state_psc", "question": "Panchayati Raj was first introduced in:", "options": ["Bihar", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"], "correct": 1, "explanation": "Panchayati Raj was first introduced in Rajasthan in 1959.", "category": "Polity"},
            {"exam_id": "state_psc", "question": "Which state is known as 'Land of Five Rivers'?", "options": ["Haryana", "Punjab", "Himachal Pradesh", "Uttarakhand"], "correct": 1, "explanation": "Punjab means 'Land of Five Rivers'.", "category": "Geography"},
            {"exam_id": "state_psc", "question": "Lokayukta was first established in:", "options": ["Bihar", "Maharashtra", "Rajasthan", "Orissa"], "correct": 1, "explanation": "Lokayukta was first established in Maharashtra in 1971.", "category": "Polity"},

            # Defence Questions
            {"exam_id": "defence", "question": "Who is the Supreme Commander of Indian Armed Forces?", "options": ["Prime Minister", "Defence Minister", "President", "Army Chief"], "correct": 2, "explanation": "The President of India is the Supreme Commander of Armed Forces.", "category": "Defence GK"},
            {"exam_id": "defence", "question": "Indian Air Force Day is celebrated on:", "options": ["October 8", "January 15", "December 4", "April 7"], "correct": 0, "explanation": "Indian Air Force Day is celebrated on October 8.", "category": "Defence GK"},
            {"exam_id": "defence", "question": "NDA is located at:", "options": ["Dehradun", "Pune", "Chennai", "Hyderabad"], "correct": 1, "explanation": "National Defence Academy is located in Khadakwasla, Pune.", "category": "Defence GK"},
            {"exam_id": "defence", "question": "Operation Vijay was conducted in:", "options": ["1965", "1971", "1999", "2001"], "correct": 2, "explanation": "Operation Vijay was the Kargil War operation in 1999.", "category": "Defence GK"},
        ]
        questions_collection.insert_many(questions)

    if content_collection.count_documents({}) == 0:
        contents = [
            {
                "_id": "polity-basics",
                "title": "Indian Polity - Basic Concepts",
                "category": "Polity",
                "content": """
# Indian Polity - Basic Concepts

## The Constitution of India
The Constitution of India is the supreme law of India. It was adopted on 26th November 1949 and came into effect on 26th January 1950.

### Key Features:
1. **Longest Written Constitution** - Contains 448 articles in 25 parts
2. **Federal System with Unitary Features** - Division of powers between Centre and States
3. **Parliamentary System** - Executive responsible to Legislature
4. **Fundamental Rights** - Part III (Articles 12-35)
5. **Directive Principles** - Part IV (Articles 36-51)

## Fundamental Rights
- Right to Equality (Articles 14-18)
- Right to Freedom (Articles 19-22)
- Right against Exploitation (Articles 23-24)
- Right to Freedom of Religion (Articles 25-28)
- Cultural and Educational Rights (Articles 29-30)
- Right to Constitutional Remedies (Article 32)

## Important Constitutional Bodies
1. Election Commission of India
2. UPSC (Union Public Service Commission)
3. Finance Commission
4. National Commission for SCs/STs
                """,
                "exam_tags": ["ssc", "upsc", "state_psc", "banking"]
            },
            {
                "_id": "maths-percentage",
                "title": "Percentage - Complete Guide",
                "category": "Mathematics",
                "content": """
# Percentage - Complete Guide

## Basic Concept
Percentage means "per hundred". It is denoted by the symbol %.

**Formula:** Percentage = (Value / Total Value) × 100

## Important Formulas

### 1. Finding Percentage
- X% of Y = (X × Y) / 100

### 2. Percentage Increase/Decrease
- Increase% = (Increase / Original) × 100
- Decrease% = (Decrease / Original) × 100

### 3. Successive Percentage Change
If two successive changes are a% and b%, then:
- Net change = a + b + (ab/100)%

## Quick Tips
- 10% = 1/10
- 12.5% = 1/8
- 20% = 1/5
- 25% = 1/4
- 33.33% = 1/3
- 50% = 1/2

## Practice Problems
1. Find 15% of 240 = (15 × 240)/100 = 36
2. What percent is 45 of 180? = (45/180) × 100 = 25%
                """,
                "exam_tags": ["ssc", "banking", "railway"]
            },
            {
                "_id": "banking-awareness",
                "title": "Banking Awareness - Key Concepts",
                "category": "Banking",
                "content": """
# Banking Awareness - Key Concepts

## Reserve Bank of India (RBI)
- Established: April 1, 1935
- Nationalized: January 1, 1949
- Headquarters: Mumbai
- Current Governor: Check latest updates

## Types of Banks
1. **Commercial Banks** - Public, Private, Foreign
2. **Small Finance Banks** - For unserved sections
3. **Payment Banks** - Deposits up to Rs. 2 lakh
4. **Regional Rural Banks** - Rural development

## Important Rates
- **Repo Rate** - Rate at which RBI lends to banks
- **Reverse Repo** - Rate at which RBI borrows from banks
- **CRR** - Cash Reserve Ratio
- **SLR** - Statutory Liquidity Ratio
- **Bank Rate** - Long-term lending rate

## Banking Terms
- **NEFT** - National Electronic Fund Transfer
- **RTGS** - Real Time Gross Settlement
- **IMPS** - Immediate Payment Service
- **UPI** - Unified Payments Interface
- **SWIFT** - Society for Worldwide Interbank Financial Telecommunication

## Priority Sector Lending
Banks must lend 40% of their net bank credit to priority sectors:
- Agriculture
- Micro and Small Enterprises
- Education
- Housing
- Export Credit
                """,
                "exam_tags": ["banking", "ssc", "railway"]
            },
            {
                "_id": "reasoning-basics",
                "title": "Reasoning - Number Series & Patterns",
                "category": "Reasoning",
                "content": """
# Reasoning - Number Series & Patterns

## Types of Number Series

### 1. Arithmetic Series
Numbers increase/decrease by a constant difference.
- Example: 2, 5, 8, 11, 14 (difference = 3)

### 2. Geometric Series
Numbers multiply/divide by a constant ratio.
- Example: 3, 6, 12, 24, 48 (ratio = 2)

### 3. Square Series
- Perfect squares: 1, 4, 9, 16, 25, 36
- Pattern: n², where n = 1, 2, 3...

### 4. Cube Series
- Perfect cubes: 1, 8, 27, 64, 125
- Pattern: n³, where n = 1, 2, 3...

### 5. Mixed Series
Combination of operations.
- Example: 2, 6, 12, 20, 30 (differences: 4, 6, 8, 10)

## Tips for Solving
1. Find the difference between consecutive terms
2. Check if differences form a pattern
3. Look for squares, cubes, or prime numbers
4. Try alternating patterns (odd/even positions)

## Practice
Find next: 3, 7, 15, 31, ?
- Pattern: ×2 + 1
- Answer: 31 × 2 + 1 = 63
                """,
                "exam_tags": ["ssc", "banking", "railway", "upsc"]
            },
            {
                "_id": "history-freedom",
                "title": "Indian Freedom Struggle",
                "category": "History",
                "content": """
# Indian Freedom Struggle

## Important Movements

### 1. Revolt of 1857
- Also called First War of Independence
- Started on May 10, 1857 at Meerut
- Leaders: Mangal Pandey, Rani Lakshmibai, Tantia Tope

### 2. Indian National Congress (1885)
- Founded by A.O. Hume
- First President: W.C. Bonnerjee
- First Session: Bombay (Mumbai)

### 3. Partition of Bengal (1905)
- By Lord Curzon
- Led to Swadeshi Movement

### 4. Non-Cooperation Movement (1920-22)
- Led by Mahatma Gandhi
- Suspended after Chauri Chaura incident

### 5. Civil Disobedience Movement (1930)
- Dandi March (Salt Satyagraha)
- March 12 to April 6, 1930

### 6. Quit India Movement (1942)
- "Do or Die" slogan
- August 8, 1942

## Important Dates
- 1919: Jallianwala Bagh Massacre
- 1929: Lahore Session - Purna Swaraj
- 1947: Independence - August 15
                """,
                "exam_tags": ["ssc", "upsc", "state_psc", "railway"]
            },
            {
                "_id": "english-grammar",
                "title": "English Grammar - Essential Rules",
                "category": "English",
                "content": """
# English Grammar - Essential Rules

## Parts of Speech

### 1. Noun
Names of people, places, things, or ideas.
- Common: book, city, dog
- Proper: India, John, Amazon

### 2. Pronoun
Replaces a noun: he, she, it, they, we

### 3. Verb
Action or state of being: run, is, have, think

### 4. Adjective
Describes a noun: beautiful, tall, quick

### 5. Adverb
Modifies verb/adjective: quickly, very, well

## Common Errors

### Subject-Verb Agreement
- Singular subject → Singular verb
- "He goes" (not "He go")
- "They go" (not "They goes")

### Tense Consistency
Maintain same tense throughout:
- "He came and sat" (both past)
- NOT "He came and sits"

### Articles (A, An, The)
- 'A' before consonant sounds
- 'An' before vowel sounds
- 'The' for specific nouns

## Idioms & Phrases
- Break the ice - Start a conversation
- Bite the bullet - Face difficulty
- Once in a blue moon - Rarely
- Piece of cake - Very easy
                """,
                "exam_tags": ["ssc", "banking", "railway"]
            },
            {
                "_id": "general-knowledge",
                "title": "General Knowledge - Important Facts",
                "category": "General Knowledge",
                "content": """
# General Knowledge - Important Facts

## India at a Glance
- **Capital**: New Delhi
- **Largest State (Area)**: Rajasthan
- **Smallest State (Area)**: Goa
- **Most Populous State**: Uttar Pradesh
- **National Animal**: Bengal Tiger
- **National Bird**: Indian Peacock
- **National Flower**: Lotus
- **National Tree**: Banyan
- **National Fruit**: Mango
- **National River**: Ganga

## Important Firsts in India
- First President: Dr. Rajendra Prasad
- First Prime Minister: Jawaharlal Nehru
- First Woman President: Pratibha Patil
- First Woman Prime Minister: Indira Gandhi
- First Chief Justice: H.J. Kania
- First Indian in Space: Rakesh Sharma
- First Woman IPS Officer: Kiran Bedi

## World Organizations
| Organization | Headquarters | Founded |
|-------------|--------------|---------|
| United Nations | New York | 1945 |
| WHO | Geneva | 1948 |
| UNESCO | Paris | 1945 |
| IMF | Washington D.C. | 1944 |
| World Bank | Washington D.C. | 1944 |
| WTO | Geneva | 1995 |

## Important Days
- January 26 - Republic Day
- March 8 - International Women's Day
- April 22 - Earth Day
- May 1 - Labour Day
- June 5 - World Environment Day
- August 15 - Independence Day
- October 2 - Gandhi Jayanti
- November 14 - Children's Day
- December 10 - Human Rights Day

## Awards and Honours
- **Bharat Ratna** - Highest civilian award
- **Padma Vibhushan** - Second highest civilian award
- **Padma Bhushan** - Third highest civilian award
- **Padma Shri** - Fourth highest civilian award
- **Param Vir Chakra** - Highest military decoration
                """,
                "exam_tags": ["ssc", "upsc", "railway", "banking", "state_psc", "defence"]
            },
            {
                "_id": "computer-awareness",
                "title": "Computer Awareness - Complete Guide",
                "category": "Computer",
                "content": """
# Computer Awareness - Complete Guide

## Computer Basics

### Definition
A computer is an electronic device that processes data according to instructions (programs).

### Generations of Computers
1. **First (1940-1956)** - Vacuum Tubes (ENIAC, UNIVAC)
2. **Second (1956-1963)** - Transistors (IBM 1620)
3. **Third (1964-1971)** - Integrated Circuits (IBM 360)
4. **Fourth (1971-Present)** - Microprocessors (Intel)
5. **Fifth (Present & Beyond)** - AI & Quantum Computing

## Computer Components

### Hardware
- **CPU** - Central Processing Unit (Brain of computer)
  - ALU (Arithmetic Logic Unit)
  - CU (Control Unit)
- **RAM** - Random Access Memory (Temporary storage)
- **ROM** - Read Only Memory (Permanent storage)
- **Hard Disk** - Secondary storage
- **Input Devices** - Keyboard, Mouse, Scanner
- **Output Devices** - Monitor, Printer, Speaker

### Software
- **System Software** - Operating System (Windows, Linux, macOS)
- **Application Software** - MS Office, Browsers, Games
- **Utility Software** - Antivirus, Disk Cleanup

## Important Abbreviations
- **CPU** - Central Processing Unit
- **RAM** - Random Access Memory
- **ROM** - Read Only Memory
- **USB** - Universal Serial Bus
- **HTTP** - HyperText Transfer Protocol
- **HTML** - HyperText Markup Language
- **URL** - Uniform Resource Locator
- **LAN** - Local Area Network
- **WAN** - Wide Area Network
- **PDF** - Portable Document Format

## Memory Units
- 1 Byte = 8 Bits
- 1 KB = 1024 Bytes
- 1 MB = 1024 KB
- 1 GB = 1024 MB
- 1 TB = 1024 GB
- 1 PB = 1024 TB

## Keyboard Shortcuts
- Ctrl + C = Copy
- Ctrl + V = Paste
- Ctrl + X = Cut
- Ctrl + Z = Undo
- Ctrl + S = Save
- Ctrl + P = Print
- Alt + F4 = Close Window
- F5 = Refresh

## Internet Concepts
- **Browser** - Chrome, Firefox, Edge, Safari
- **Search Engine** - Google, Bing, Yahoo
- **Email** - Electronic Mail
- **WWW** - World Wide Web (invented by Tim Berners-Lee)
- **IP Address** - Unique identifier for devices
                """,
                "exam_tags": ["ssc", "banking", "railway", "state_psc"]
            },
            {
                "_id": "biology-basics",
                "title": "Biology - Human Body & Life Sciences",
                "category": "Biology",
                "content": """
# Biology - Human Body & Life Sciences

## Cell - Basic Unit of Life
- Discovered by **Robert Hooke** (1665)
- **Cell Theory** by Schleiden and Schwann
- Types: Prokaryotic (no nucleus) & Eukaryotic (with nucleus)

### Cell Organelles
- **Nucleus** - Control center, contains DNA
- **Mitochondria** - Powerhouse of cell (ATP production)
- **Ribosome** - Protein synthesis
- **Chloroplast** - Photosynthesis (in plants)
- **Golgi Body** - Packaging and secretion
- **Endoplasmic Reticulum** - Transport system

## Human Body Systems

### 1. Circulatory System
- **Heart** - Pumps blood (4 chambers)
- **Blood** - RBC, WBC, Platelets, Plasma
- **Blood Groups** - A, B, AB, O (Rh +/-)
- Universal Donor: O-
- Universal Recipient: AB+

### 2. Respiratory System
- Organs: Nose, Trachea, Lungs
- Exchange of O₂ and CO₂ occurs in **Alveoli**
- Normal breathing rate: 12-20 breaths/minute

### 3. Digestive System
- **Mouth** → **Esophagus** → **Stomach** → **Small Intestine** → **Large Intestine**
- Longest part: Small Intestine (~6 meters)
- Liver produces **Bile** for fat digestion

### 4. Nervous System
- **Brain** - Controls all body functions
- **Spinal Cord** - Connects brain to body
- Neurons transmit electrical signals

### 5. Skeletal System
- Total bones in adult: **206**
- Smallest bone: **Stapes** (in ear)
- Largest bone: **Femur** (thigh bone)

## Important Vitamins
| Vitamin | Chemical Name | Deficiency Disease |
|---------|---------------|-------------------|
| A | Retinol | Night Blindness |
| B1 | Thiamine | Beriberi |
| B12 | Cyanocobalamin | Anemia |
| C | Ascorbic Acid | Scurvy |
| D | Calciferol | Rickets |
| E | Tocopherol | Sterility |
| K | Phylloquinone | Blood clotting issues |

## Diseases and Causes
- **Malaria** - Plasmodium (by Anopheles mosquito)
- **Dengue** - Virus (by Aedes mosquito)
- **Tuberculosis** - Bacteria (Mycobacterium)
- **AIDS** - HIV virus
- **COVID-19** - SARS-CoV-2 virus
                """,
                "exam_tags": ["ssc", "upsc", "railway", "state_psc", "defence"]
            },
            {
                "_id": "chemistry-basics",
                "title": "Chemistry - Elements & Compounds",
                "category": "Chemistry",
                "content": """
# Chemistry - Elements & Compounds

## Basic Concepts

### Atom
- Smallest unit of matter
- Components: Protons (+), Neutrons (0), Electrons (-)
- **Atomic Number** = Number of protons
- **Mass Number** = Protons + Neutrons

### Molecule
- Two or more atoms bonded together
- Example: H₂O (Water), O₂ (Oxygen)

## Periodic Table

### Classification
- **Metals** - Good conductors, lustrous (Left side)
- **Non-metals** - Poor conductors (Right side)
- **Metalloids** - Properties of both (B, Si, Ge, As, Sb, Te)

### Important Elements
| Element | Symbol | Atomic No. |
|---------|--------|------------|
| Hydrogen | H | 1 |
| Carbon | C | 6 |
| Nitrogen | N | 7 |
| Oxygen | O | 8 |
| Sodium | Na | 11 |
| Iron | Fe | 26 |
| Copper | Cu | 29 |
| Gold | Au | 79 |

## Acids, Bases & Salts

### Acids
- Taste sour, turn blue litmus red
- pH < 7
- Examples: HCl, H₂SO₄, HNO₃

### Bases
- Taste bitter, turn red litmus blue
- pH > 7
- Examples: NaOH, KOH, Ca(OH)₂

### pH Scale
- 0-6: Acidic
- 7: Neutral
- 8-14: Basic

## Important Chemical Compounds
| Common Name | Chemical Name | Formula |
|-------------|---------------|---------|
| Water | Hydrogen Oxide | H₂O |
| Salt | Sodium Chloride | NaCl |
| Baking Soda | Sodium Bicarbonate | NaHCO₃ |
| Washing Soda | Sodium Carbonate | Na₂CO₃ |
| Bleaching Powder | Calcium Hypochlorite | Ca(OCl)₂ |
| Plaster of Paris | Calcium Sulphate | CaSO₄·½H₂O |
| Marble | Calcium Carbonate | CaCO₃ |
| Caustic Soda | Sodium Hydroxide | NaOH |

## Metals and Alloys
- **Bronze** = Copper + Tin
- **Brass** = Copper + Zinc
- **Steel** = Iron + Carbon
- **Stainless Steel** = Iron + Chromium + Nickel

## Important Reactions
- **Photosynthesis**: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
- **Respiration**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy
- **Rusting**: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃
                """,
                "exam_tags": ["ssc", "upsc", "railway", "state_psc", "defence"]
            },
            {
                "_id": "physics-basics",
                "title": "Physics - Laws & Concepts",
                "category": "Physics",
                "content": """
# Physics - Laws & Concepts

## Units of Measurement (SI Units)
| Quantity | Unit | Symbol |
|----------|------|--------|
| Length | Meter | m |
| Mass | Kilogram | kg |
| Time | Second | s |
| Temperature | Kelvin | K |
| Electric Current | Ampere | A |
| Luminous Intensity | Candela | cd |

## Newton's Laws of Motion

### First Law (Law of Inertia)
An object remains at rest or in uniform motion unless acted upon by an external force.

### Second Law
Force = Mass × Acceleration (F = ma)

### Third Law
Every action has an equal and opposite reaction.

## Important Physics Concepts

### Speed, Velocity & Acceleration
- **Speed** = Distance / Time
- **Velocity** = Displacement / Time (with direction)
- **Acceleration** = Change in velocity / Time

### Work, Energy & Power
- **Work** = Force × Distance (W = F × d)
- **Kinetic Energy** = ½mv²
- **Potential Energy** = mgh
- **Power** = Work / Time

### Waves
- **Sound waves** - Need medium, longitudinal
- **Light waves** - Don't need medium, transverse
- Speed of light = 3 × 10⁸ m/s
- Speed of sound in air = 343 m/s

## Important Discoveries
- **Gravity** - Isaac Newton
- **Theory of Relativity** - Albert Einstein
- **Radioactivity** - Henri Becquerel
- **X-rays** - Wilhelm Roentgen
- **Electron** - J.J. Thomson
- **Neutron** - James Chadwick

## Instruments & Uses
| Instrument | Measures |
|------------|----------|
| Thermometer | Temperature |
| Barometer | Atmospheric Pressure |
| Ammeter | Electric Current |
| Voltmeter | Electric Potential |
| Seismograph | Earthquakes |
| Speedometer | Speed |
                """,
                "exam_tags": ["ssc", "upsc", "railway", "state_psc", "defence"]
            },
            {
                "_id": "geography-india",
                "title": "Indian Geography - Complete Overview",
                "category": "Geography",
                "content": """
# Indian Geography - Complete Overview

## India - Basic Facts
- **Location**: Northern Hemisphere
- **Area**: 3.287 million sq km (7th largest)
- **Coastline**: 7,516.6 km
- **Land Borders**: 15,106.7 km
- **States**: 28 | **Union Territories**: 8

## Physical Divisions of India

### 1. The Himalayan Mountains
- **Himadri** (Greater Himalayas) - Highest peaks
- **Himachal** (Lesser Himalayas)
- **Shiwaliks** (Outer Himalayas)

### 2. The Northern Plains
- Formed by Indus, Ganga, Brahmaputra rivers
- Most fertile region

### 3. The Peninsular Plateau
- **Deccan Plateau** - Largest plateau
- **Chota Nagpur Plateau** - Rich in minerals

### 4. The Coastal Plains
- Western Coast: Konkan, Malabar
- Eastern Coast: Coromandel, Northern Circars

### 5. The Islands
- **Andaman & Nicobar** (Bay of Bengal)
- **Lakshadweep** (Arabian Sea)

## Important Rivers
| River | Origin | Flows Into |
|-------|--------|------------|
| Ganga | Gangotri | Bay of Bengal |
| Yamuna | Yamunotri | Ganga at Prayagraj |
| Brahmaputra | Tibet | Bay of Bengal |
| Godavari | Nashik | Bay of Bengal |
| Narmada | Amarkantak | Arabian Sea |
| Krishna | Mahabaleshwar | Bay of Bengal |

## Climate of India
- **Monsoon Climate** - June to September
- **Winter** - December to February
- **Summer** - March to May
- **Retreating Monsoon** - October to November

## Important Passes
- **Khyber Pass** - Pakistan-Afghanistan
- **Bolan Pass** - Pakistan
- **Rohtang Pass** - Himachal Pradesh
- **Nathu La** - Sikkim-Tibet

## Soil Types
1. **Alluvial Soil** - Most fertile, Northern plains
2. **Black Soil** - Cotton cultivation, Deccan
3. **Red Soil** - Deccan plateau
4. **Laterite Soil** - Heavy rainfall areas
                """,
                "exam_tags": ["ssc", "upsc", "railway", "state_psc", "banking"]
            },
            {
                "_id": "economics-basics",
                "title": "Economics - Basic Concepts",
                "category": "Economics",
                "content": """
# Economics - Basic Concepts

## Types of Economies
1. **Capitalist Economy** - Private ownership (USA)
2. **Socialist Economy** - Government ownership
3. **Mixed Economy** - Both private and public (India)

## National Income Concepts

### GDP (Gross Domestic Product)
Total value of goods and services produced within a country's borders.

### GNP (Gross National Product)
GDP + Income from abroad - Income paid to foreigners

### NNP (Net National Product)
GNP - Depreciation

### Per Capita Income
National Income / Total Population

## Indian Economy

### Sectors
- **Primary** - Agriculture, Mining, Fishing
- **Secondary** - Manufacturing, Construction
- **Tertiary** - Services, Banking, IT

### Five Year Plans
- First Plan: 1951-1956 (Agriculture focus)
- Current: Replaced by NITI Aayog (2015)

## Important Economic Terms

### Inflation
General increase in prices over time
- **CPI** - Consumer Price Index
- **WPI** - Wholesale Price Index

### Budget
Annual financial statement of government
- **Revenue Budget** - Income and regular expenditure
- **Capital Budget** - Loans and investments

### Fiscal Deficit
Total Expenditure - Total Revenue (excluding borrowings)

## Banking & Finance
- **Scheduled Banks** - Listed in RBI's 2nd Schedule
- **Priority Sector Lending** - 40% of credit
- **Basel Norms** - International banking regulations

## International Organizations
- **IMF** - International Monetary Fund
- **World Bank** - Development lending
- **WTO** - World Trade Organization
- **BRICS** - Brazil, Russia, India, China, South Africa
                """,
                "exam_tags": ["ssc", "upsc", "banking", "state_psc"]
            },
            {
                "_id": "current-affairs-tips",
                "title": "Current Affairs - How to Prepare",
                "category": "Current Affairs",
                "content": """
# Current Affairs - How to Prepare

## Daily Reading Sources
1. **Newspapers**: The Hindu, Indian Express, PIB
2. **Magazines**: Yojana, Kurukshetra, Pratiyogita Darpan
3. **Websites**: PIB, Government portals
4. **Apps**: News apps with exam focus

## Categories to Focus

### National Affairs
- Government schemes and policies
- Cabinet decisions
- Important bills passed
- Supreme Court verdicts

### International Affairs
- Summits and conferences
- Bilateral relations
- International organizations
- Global issues

### Economy
- RBI announcements
- Budget highlights
- GDP growth
- Trade agreements

### Science & Technology
- Space missions (ISRO)
- Defence technology
- IT developments
- Health research

### Sports
- Major tournaments
- Award winners
- Records broken
- Upcoming events

### Awards & Honours
- Bharat Ratna recipients
- Nobel Prize winners
- National awards
- International recognitions

## Important Government Schemes
- **PM-KISAN** - Direct income support to farmers
- **Ayushman Bharat** - Health insurance scheme
- **Swachh Bharat Mission** - Cleanliness drive
- **Digital India** - E-governance initiatives
- **Make in India** - Manufacturing promotion
- **Skill India** - Skill development
- **Startup India** - Entrepreneurship support

## Monthly Revision Tips
1. Make short notes weekly
2. Focus on facts, dates, names
3. Create mind maps for connections
4. Practice MCQs regularly
5. Discuss with study groups
                """,
                "exam_tags": ["ssc", "upsc", "banking", "railway", "state_psc", "defence"]
            }
        ]
        content_collection.insert_many(contents)

    if subjects_collection.count_documents({}) == 0:
        subjects = [
            {
                "_id": "general-knowledge",
                "name": "General Knowledge",
                "icon": "🌍",
                "color": "#667eea",
                "description": "Current affairs, important facts, and general awareness",
                "topics": ["India Facts", "World Organizations", "Important Days", "Awards & Honours", "First in India"],
                "content_ids": ["general-knowledge"]
            },
            {
                "_id": "mathematics",
                "name": "Mathematics",
                "icon": "📐",
                "color": "#48bb78",
                "description": "Quantitative aptitude, arithmetic, algebra, and geometry",
                "topics": ["Percentage", "Ratio & Proportion", "Profit & Loss", "Time & Work", "Number System"],
                "content_ids": ["maths-percentage"]
            },
            {
                "_id": "reasoning",
                "name": "Reasoning",
                "icon": "🧩",
                "color": "#ed8936",
                "description": "Logical reasoning, analytical ability, and problem solving",
                "topics": ["Number Series", "Coding-Decoding", "Analogies", "Blood Relations", "Direction Sense"],
                "content_ids": ["reasoning-basics"]
            },
            {
                "_id": "english",
                "name": "English",
                "icon": "📝",
                "color": "#9f7aea",
                "description": "Grammar, vocabulary, comprehension, and writing skills",
                "topics": ["Grammar Rules", "Vocabulary", "Idioms & Phrases", "Sentence Correction", "Reading Comprehension"],
                "content_ids": ["english-grammar"]
            },
            {
                "_id": "computer",
                "name": "Computer Awareness",
                "icon": "💻",
                "color": "#38b2ac",
                "description": "Computer fundamentals, hardware, software, and internet",
                "topics": ["Computer Basics", "Hardware & Software", "MS Office", "Internet", "Shortcuts"],
                "content_ids": ["computer-awareness"]
            },
            {
                "_id": "biology",
                "name": "Biology",
                "icon": "🧬",
                "color": "#e53e3e",
                "description": "Human body, life sciences, diseases, and nutrition",
                "topics": ["Human Body Systems", "Cell Biology", "Vitamins & Nutrition", "Diseases", "Genetics"],
                "content_ids": ["biology-basics"]
            },
            {
                "_id": "chemistry",
                "name": "Chemistry",
                "icon": "⚗️",
                "color": "#dd6b20",
                "description": "Elements, compounds, reactions, and periodic table",
                "topics": ["Periodic Table", "Acids & Bases", "Chemical Compounds", "Reactions", "Alloys"],
                "content_ids": ["chemistry-basics"]
            },
            {
                "_id": "physics",
                "name": "Physics",
                "icon": "⚡",
                "color": "#3182ce",
                "description": "Laws of motion, energy, waves, and scientific instruments",
                "topics": ["Laws of Motion", "Energy & Work", "Waves", "Units", "Instruments"],
                "content_ids": ["physics-basics"]
            },
            {
                "_id": "polity",
                "name": "Indian Polity",
                "icon": "🏛️",
                "color": "#805ad5",
                "description": "Constitution, governance, fundamental rights, and duties",
                "topics": ["Constitution", "Fundamental Rights", "Parliament", "Judiciary", "Elections"],
                "content_ids": ["polity-basics"]
            },
            {
                "_id": "history",
                "name": "History",
                "icon": "📜",
                "color": "#b7791f",
                "description": "Indian history, freedom struggle, and ancient civilizations",
                "topics": ["Freedom Struggle", "Ancient India", "Medieval India", "Modern India", "World History"],
                "content_ids": ["history-freedom"]
            },
            {
                "_id": "geography",
                "name": "Geography",
                "icon": "🗺️",
                "color": "#2f855a",
                "description": "Indian geography, rivers, mountains, climate, and resources",
                "topics": ["Physical Geography", "Rivers", "Climate", "Soil Types", "Natural Resources"],
                "content_ids": ["geography-india"]
            },
            {
                "_id": "economics",
                "name": "Economics",
                "icon": "💰",
                "color": "#c53030",
                "description": "Indian economy, banking, budget, and international trade",
                "topics": ["GDP & National Income", "Banking", "Budget", "Inflation", "International Trade"],
                "content_ids": ["economics-basics", "banking-awareness"]
            },
            {
                "_id": "current-affairs",
                "name": "Current Affairs",
                "icon": "📰",
                "color": "#2b6cb0",
                "description": "Latest news, government schemes, and current events",
                "topics": ["National Affairs", "International Affairs", "Sports", "Awards", "Government Schemes"],
                "content_ids": ["current-affairs-tips"]
            }
        ]
        subjects_collection.insert_many(subjects)
