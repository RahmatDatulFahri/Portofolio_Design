
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { View, Project } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle browser back button (rudimentary hash routing)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View | '';
      if (hash === 'home' || hash === 'about' || hash === 'contact') {
        setView(hash);
        setSelectedProject(null);
      } else if (!hash) {
        setView('home');
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetView = (v: View) => {
    setView(v);
    setSelectedProject(null);
    window.location.hash = v;
    window.scrollTo(0, 0);
  };

  const handleSelectProject = (p: Project) => {
    setSelectedProject(p);
    setView('project');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (view === 'project' && selectedProject) {
      return (
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => handleSetView('home')} 
        />
      );
    }

    switch (view) {
      case 'home':
        return (
          <>
            <Hero />
            <ProjectList onSelect={handleSelectProject} />
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <Layout currentView={view} setView={handleSetView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
