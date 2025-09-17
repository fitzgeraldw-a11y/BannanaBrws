import { useState } from 'react';

export default function SearchBar({ tabs, setTabs, setActiveTab }) {
  const [input, setInput] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      let url = input;
      if (!/^https?:\/\//i.test(input)) {
        url = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
      }
      setTabs(prev => prev.map(tab => tab.id === setActiveTab ? {...tab, url, title: input} : tab));
      setInput('');
    }
  };

  return <input type="text" value={input} placeholder="Search or type URL..." onChange={e => setInput(e.target.value)} onKeyDown={handleEnter} />;
}
