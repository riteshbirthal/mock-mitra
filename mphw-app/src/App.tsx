import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import TopicList from './pages/TopicList';
import TopicDetail from './pages/TopicDetail';
import Practice from './pages/Practice';
import MockTest from './pages/MockTest';
import Progress from './pages/Progress';
import Rewards from './pages/Rewards';
import ComputerKnowledge from './pages/topics/ComputerKnowledge';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/topics/:subjectId" element={<TopicList />} />
            <Route path="/topic/:subjectId/:topicId" element={<TopicDetail />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:topicId" element={<Practice />} />
            <Route path="/mock-test" element={<MockTest />} />
            <Route path="/topics/computer-knowledge" element={<ComputerKnowledge />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
