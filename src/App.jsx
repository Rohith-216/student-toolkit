import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AttendanceCalculator from "./pages/AttendanceCalculator";
import CGPACalculator from "./pages/CGPACalculator";
import PercentageCalculator from "./pages/PercentageCalculator";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CGPAToPercentage from "./pages/CGPAToPercentage";
import AttendanceShortageCalculator from "./pages/AttendanceShortageCalculator";
// import AgeCalculator from "./pages/AgeCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance-calculator" element={<AttendanceCalculator />} />
        <Route path="/cgpa-calculator" element={<CGPACalculator />} />
        <Route path="/percentage-calculator" element={<PercentageCalculator />} />
        {/* <Route path="/age-calculator" element={<AgeCalculator />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgpa-to-percentage" element={<CGPAToPercentage />} />
        <Route path="/attendance-shortage-calculator" element={<AttendanceShortageCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;