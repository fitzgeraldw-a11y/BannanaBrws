export default function Tab({ tab, activeTab, setActiveTab, closeTab }) {
  return (
    <div className={`tab ${activeTab === tab.id ? 'active' : ''}`}>
      <span onClick={() => setActiveTab(tab.id)}>{tab.title}</span>
      <button onClick={() => closeTab(tab.id)} className="close-tab">x</button>
    </div>
  );
}
