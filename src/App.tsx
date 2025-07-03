import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';
import ProfilePage from './components/ProfilePage';
import JobDetail from './components/JobDetail';
import BottomNav from './components/BottomNav';
import SideMenu from './components/SideMenu';
import { jobs } from './data/jobs';
import { Job } from './types/Job';

type View = 'home' | 'jobs' | 'profile' | 'detail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('semua');

  // Get featured jobs (newest 3 jobs)
  const featuredJobs = useMemo(() => {
    return [...jobs]
      .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
      .slice(0, 3);
  }, []);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setCurrentView('detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedJob(null);
    setActiveTab('home');
  };

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setSearchQuery('');
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (page: string) => {
    setCurrentView(page as View);
    setActiveTab(page);
    setIsSearchVisible(false);
    setSearchQuery('');
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'search') {
      setIsSearchVisible(true);
      if (currentView !== 'jobs') {
        setCurrentView('jobs');
      }
    } else {
      setIsSearchVisible(false);
      setSearchQuery('');
      setCurrentView(tab as View);
    }
    setActiveTab(tab);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleViewAllJobs = () => {
    setCurrentView('jobs');
    setActiveTab('jobs');
    setSelectedCategory('semua');
  };

  if (currentView === 'detail' && selectedJob) {
    return <JobDetail job={selectedJob} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={handleMenuClick} 
        onSearchClick={handleSearchToggle}
        currentPage={currentView}
      />
      
      <SearchBar 
        onSearch={handleSearch}
        onClose={() => setIsSearchVisible(false)}
        isVisible={isSearchVisible}
      />

      <main className="min-h-screen">
        {currentView === 'home' && (
          <HomePage
            featuredJobs={featuredJobs}
            onJobClick={handleJobClick}
            onViewAllJobs={handleViewAllJobs}
          />
        )}
        
        {currentView === 'jobs' && (
          <JobsPage
            jobs={jobs}
            onJobClick={handleJobClick}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        )}
        
        {currentView === 'profile' && <ProfilePage />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      
      <SideMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        onNavigate={handleNavigate}
        currentPage={currentView}
      />
    </div>
  );
}

export default App;