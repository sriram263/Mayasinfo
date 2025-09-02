import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import JournalList from './components/JournalList.jsx';
import SubjectBrowse from './components/SubjectBrowse.jsx';
import ResearchPicks from './components/ResearchPicks.jsx';
import NewsSection from './components/NewsSection.jsx';

// Homepage layout approximating Inderscience structure
const App = () => {
  return (
    <div className="min-h-full bg-white text-gray-800">
      <Header />

      {/* Hero/Intro strip */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="container-max py-5">
          <h1 className="text-2xl font-semibold text-gray-900">Leading journals in science, technology and management</h1>
          <p className="text-sm text-gray-600 mt-1 max-w-3xl">
            Discover journals, explore research topics, and follow the latest updates from our editorial teams.
          </p>
        </div>
      </section>

      {/* Main content grid: left content + right sidebar */}
      <main className="container-max py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-8 space-y-6">
            <ResearchPicks />
            <NewsSection />
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <SubjectBrowse />
            <JournalList />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;