import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalArt from "./pages/DigitalArt";
import ProfilePage from "../src/pages/profile";
import CheckoutPage from "../src/pages/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DigitalArt />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
