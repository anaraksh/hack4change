import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserOptions from './components/UserOptions';
import Challenge from './components/Challenge';
import Reward from './components/Reward'; 
import Results from './components/Results';
import QuizTopics from './components/QuizTopics';
import BusinessFundamentals from './components/quizzes/BusinessFundamentals';
import MarketResearch from './components/quizzes/MarketResearch';
import BusinessPlan from './components/quizzes/BusinessPlan';
import MarketingSales from './components/quizzes/MarketingSales';
import FinancialManagement from './components/quizzes/FinancialManagement';
import LeadershipTeamManagement from './components/quizzes/LeadershipTeamManagement';
import LegalEthicalConsiderations from './components/quizzes/LegalEthicalConsiderations';
import InnovationCreativity from './components/quizzes/InnovationCreativity';
import RiskManagement from './components/quizzes/RiskManagement';
import SustainabilitySocialResponsibility from './components/quizzes/SustainabilitySocialResponsibility';
import StoryProgression from './components/StoryProgression';
import EntrepreneurGuide from './components/EntrepreneurGuide';
import HowToStartup from './components/HowToStartup';
import Top10StartupMistakes from './components/Top10StartupMistakes';
import SignsYouAreAnEntrepreneur from './components/SignsYouAreAnEntrepreneur';
import JobVsStartup from './components/JobVsStartup';
import RightTimeToRaiseFunds from './components/RightTimeToRaiseFunds';
import HowToRaiseFunds from './components/HowToRaiseFunds';
import PitchYourStartup from './components/PitchYourStartup';
import PitchingPresentation from './components/PitchingPresentation';
import Board from './components/Board';  // Import Board component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-options" element={<UserOptions />} />
        <Route path="/challenge/:id" element={<Challenge />} />
        <Route path="/results" element={<Results />} />
        <Route path="/quiz-topics" element={<QuizTopics />} />
        <Route path="/quiz/business-fundamentals" element={<BusinessFundamentals />} />
        <Route path="/quiz/market-research" element={<MarketResearch />} />
        <Route path="/quiz/business-plan" element={<BusinessPlan />} />
        <Route path="/quiz/marketing-sales" element={<MarketingSales />} />
        <Route path="/quiz/financial-management" element={<FinancialManagement />} />
        <Route path="/quiz/leadership-team-management" element={<LeadershipTeamManagement />} />
        <Route path="/quiz/legal-ethical-considerations" element={<LegalEthicalConsiderations />} />
        <Route path="/quiz/innovation-creativity" element={<InnovationCreativity />} />
        <Route path="/quiz/risk-management" element={<RiskManagement />} />
        <Route path="/quiz/sustainability-social-responsibility" element={<SustainabilitySocialResponsibility />} />
        <Route path="/storyprogression" element={<StoryProgression />} />
        <Route path="/entrepreneurguide" element={<EntrepreneurGuide />} />
        <Route path="/entrepreneurguide/how-to-startup" element={<HowToStartup />} />
        <Route path="/entrepreneurguide/top-10-startup-mistakes" element={<Top10StartupMistakes />} />
        <Route path="/entrepreneurguide/signs-you-are-an-entrepreneur" element={<SignsYouAreAnEntrepreneur />} />
        <Route path="/entrepreneurguide/job-vs-startup" element={<JobVsStartup />} />
        <Route path="/entrepreneurguide/right-time-to-raise-funds" element={<RightTimeToRaiseFunds />} />
        <Route path="/entrepreneurguide/how-to-raise-funds" element={<HowToRaiseFunds />} />
        <Route path="/entrepreneurguide/pitch-your-startup" element={<PitchYourStartup />} />
        <Route path="/entrepreneurguide/pitching-presentation" element={<PitchingPresentation />} />
        <Route path="/leaderboard" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;