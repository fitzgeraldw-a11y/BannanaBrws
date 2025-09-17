import Tab from './Tab';
import SearchBar from './SearchBar';

export default function TabBar({ tabs, activeTab, setActiveTab, addTab, closeTab, setTabs }) {
  return (
    <div className="tab-bar">
      {tabs.map(tab => (
        <Tab key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} closeTab={closeTab} />
      ))}
      <button onClick={addTab} className="add-tab">+</button>
      <SearchBar tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} />
    </div>
  );
}
