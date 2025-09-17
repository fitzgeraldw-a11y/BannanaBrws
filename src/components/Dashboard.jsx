export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Your Web, Your Way — With Bananas.</h1>
      <div className="tiles">
        <a href="https://example.com" target="_blank">Example</a>
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="https://news.google.com" target="_blank">News</a>
        <a href="#" target="_blank">Weather</a>
      </div>
      <div className="widgets">
        <div className="clock">12:00 PM</div>
        <div className="weather">☀️ 72°F</div>
      </div>
    </div>
  );
}
