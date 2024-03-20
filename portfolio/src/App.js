import DarkThemeProvider from "./Theme/DarkTheme";
import Main from "./components/main";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <DarkThemeProvider>
        <Main />
      </DarkThemeProvider>
    </div>
  );
}

export default App;
