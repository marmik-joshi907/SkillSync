import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SkillAnalysis from './components/SkillAnalysis';
import CareerRoadmap from './components/CareerRoadmap';
import JobMatch from './components/JobMatch';
import Courses from './components/Courses';
import ProfileSetup from './components/ProfileSetup';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [user, setUser] = useState<{ name: string; email: string } | undefined>(undefined);

  const handleGetStarted = () => {
    setCurrentView('setup');
  };

  const handleSetupComplete = () => {
    setUser({
      name: 'Anjali Sharma',
      email: 'anjali.sharma@example.com'
    });
    setCurrentView('dashboard');
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  if (currentView === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  if (currentView === 'setup') {
    return <ProfileSetup onComplete={handleSetupComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView} 
        onViewChange={handleViewChange}
        user={user}
      />
      <main>
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'analysis' && <SkillAnalysis />}
        {currentView === 'roadmap' && <CareerRoadmap />}
        {currentView === 'jobs' && <JobMatch />}
        {currentView === 'courses' && <Courses />}
      </main>
    </div>
  );
}

export default App;