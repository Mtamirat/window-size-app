import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Window Size Tracker</h1>

      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      {width < 768 ? (
        <div>
          <h2>📱 Mobile Layout</h2>
          <p>This layout is shown on smaller screens.</p>
        </div>
      ) : (
        <div>
          <h2>💻 Desktop Layout</h2>
          <p>This layout is shown on larger screens.</p>
        </div>
      )}
    </div>
  );
}

export default App;