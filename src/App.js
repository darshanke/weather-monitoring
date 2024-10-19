import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SpellCheckApp from "./Components/SpellCheckApp";

function App() {
  return (
    <Router>
      <div >
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<SpellCheckApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
