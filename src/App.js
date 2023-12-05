import { useState } from "react";
import Login from "./components/Login/Login";
import FeatureToggles from "./components/FeatureToggles/FeatureToggles";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleLogin() {
    setUserLoggedIn(true);
  }

  return (
    <main>
      {!userLoggedIn && <Login onLogin={handleLogin} />}
      {userLoggedIn && <FeatureToggles />}
    </main>
  );
}

export default App;
