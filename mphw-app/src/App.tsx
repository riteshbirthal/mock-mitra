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
import Anatomy from './pages/topics/Anatomy';
import Physiology from './pages/topics/Physiology';
import Microbiology from './pages/topics/Microbiology';
import FirstAid from './pages/topics/FirstAid';
import HealthHygiene from './pages/topics/HealthHygiene';
import Nutrition from './pages/topics/Nutrition';
import Immunization from './pages/topics/Immunization';
import MCH from './pages/topics/MCH';
import CommunicableDiseases from './pages/topics/CommunicableDiseases';
import PublicHealth from './pages/topics/PublicHealth';
import MentalHealth from './pages/topics/MentalHealth';
import Pharmacology from './pages/topics/Pharmacology';
import PracticalSkills from './pages/topics/PracticalSkills';
import RecordKeeping from './pages/topics/RecordKeeping';
import CommunicationSkills from './pages/topics/CommunicationSkills';
import HealthEducation from './pages/topics/HealthEducation';
import InfectionControl from './pages/topics/InfectionControl';
import GeneralAwareness from './pages/topics/GeneralAwareness';
import OccupationalHealth from './pages/topics/OccupationalHealth';
import Mathematics from './pages/topics/Mathematics';
import Reasoning from './pages/topics/Reasoning';

import AllLessons from './pages/AllLessons';
import SubtopicPractice from './pages/SubtopicPractice';
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
            <Route path="/subtopic-practice" element={<SubtopicPractice />} />
            <Route path="/subtopic-practice/:subjectId" element={<SubtopicPractice />} />
            <Route path="/subtopic-practice/:subjectId/:topicId" element={<SubtopicPractice />} />
            <Route path="/mock-test" element={<MockTest />} />
            <Route path="/topics/computer-knowledge" element={<ComputerKnowledge />} />
            <Route path="/topics/anatomy" element={<Anatomy />} />
            <Route path="/topics/physiology" element={<Physiology />} />
            <Route path="/topics/microbiology" element={<Microbiology />} />
            <Route path="/topics/first-aid" element={<FirstAid />} />
            <Route path="/topics/health-hygiene" element={<HealthHygiene />} />
            <Route path="/topics/nutrition" element={<Nutrition />} />
            <Route path="/topics/immunization" element={<Immunization />} />
            <Route path="/topics/maternal-child-health" element={<MCH />} />
            <Route path="/topics/communicable-diseases" element={<CommunicableDiseases />} />
            <Route path="/topics/public-health" element={<PublicHealth />} />
            <Route path="/topics/mental-health" element={<MentalHealth />} />
            <Route path="/topics/pharmacology" element={<Pharmacology />} />
            <Route path="/topics/practical-skills" element={<PracticalSkills />} />
            <Route path="/topics/record-keeping" element={<RecordKeeping />} />
            <Route path="/topics/communication-skills" element={<CommunicationSkills />} />
            <Route path="/topics/health-education" element={<HealthEducation />} />
            <Route path="/topics/infection-control" element={<InfectionControl />} />
            <Route path="/topics/general-awareness" element={<GeneralAwareness />} />
            <Route path="/topics/occupational-health" element={<OccupationalHealth />} />
            <Route path="/topics/mathematics" element={<Mathematics />} />
            <Route path="/topics/reasoning" element={<Reasoning />} />
            
            <Route path="/all-lessons" element={<AllLessons />} />
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
