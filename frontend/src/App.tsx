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
import { ExamPrep, ExamTopics, ExamTopicDetail } from './pages/exam';
import MPHWPractice from './pages/mphw/MPHWPractice';
import MPHWArticles from './pages/mphw/MPHWArticles';
import ComputerKnowledge from './pages/mphw/ComputerKnowledge';
import ComputerKnowledgeLesson from './pages/mphw/ComputerKnowledgeLesson';
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
            
            {/* Generic Exam Prep Routes */}
            <Route path="/prep/:examId" element={<ExamPrep />} />
            <Route path="/prep/:examId/topics/:subjectId" element={<ExamTopics />} />
            <Route path="/prep/:examId/topic/:subjectId/:topicId" element={<ExamTopicDetail />} />
            
            {/* Legacy MPHW routes (redirect to generic) */}
            <Route path="/mphw" element={<ExamPrep />} />
            <Route path="/mphw/topics/:subjectId" element={<ExamTopics />} />
            <Route path="/mphw/topic/:subjectId/:topicId" element={<ExamTopicDetail />} />
            <Route path="/mphw/practice" element={<MPHWPractice />} />
            <Route path="/mphw/articles" element={<MPHWArticles />} />
            <Route path="/mphw/computer-knowledge" element={<ComputerKnowledge />} />
            <Route path="/mphw/computer-knowledge/:lessonId" element={<ComputerKnowledgeLesson />} />
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
