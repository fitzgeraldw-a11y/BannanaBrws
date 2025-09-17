import { useState, useEffect } from 'react';
import TabBar from './components/TabBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  const [tabs, setTabs] = useState([{id: 1, title: 'New Tab', url: ''}]);
  const [activeTab, setActiveTab] = useState(1);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addTab = () => {
    const newId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    setTabs([...tabs, {id: newId, title: 'New Tab', url: ''}]);
    setActiveTab(newId);
  };

  const closeTab = (id) => {
    const updatedTabs = tabs.filter(tab => tab.id !== id);
    setTabs(updatedTabs);
    if (activeTab === id && updatedTabs.length) setActiveTab(updatedTabs[0].id);
  };

  return (
    <div className="app">
      <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} addTab={addTab} closeTab={closeTab} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <div className="content-area">
        {tabs.find(t => t.id === activeTab)?.url ? (
          <iframe
            src={tabs.find(t => t.id === activeTab).url}
            title="tab-content"
            className="tab-frame"
          />
        ) : (
          <Dashboard />
        )}
      </div>
      <Footer />
    </div>
  );
}
