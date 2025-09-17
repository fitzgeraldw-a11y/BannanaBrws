export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="theme-switcher">
      <button onClick={() => setTheme('default')}>Default</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('banana')}>Banana Split</button>
    </div>
  );
}
