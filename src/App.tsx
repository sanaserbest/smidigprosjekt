import React from "react";
import "./App.css";
import LoggInn from "./LoggInn";
import KledaLogo from "./assets/KledaLogo.png";
import Dashboard from "./Dashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoggInn onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
