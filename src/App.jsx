import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AttendanceCalculator from "./pages/AttendanceCalculator";
import CGPACalculator from "./pages/CGPACalculator";
import PercentageCalculator from "./pages/PercentageCalculator";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CGPAToPercentage from "./pages/CGPAToPercentage";
import AttendanceShortageCalculator from "./pages/AttendanceShortageCalculator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
import GPACalculator from "./pages/GPACalculator";
import SGPAcalculator from "./pages/SGPACalculator";
import SemesterPercentageCalculator from "./pages/SemesterPercentageCalculator";
import StudyTimetableGenerator from "./pages/StudyTimetableGenerator";
import AgeCalculator from "./pages/AgeCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance-calculator" element={<AttendanceCalculator />} />
        <Route path="/cgpa-calculator" element={<CGPACalculator />} />
        <Route path="/percentage-calculator" element={<PercentageCalculator />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgpa-to-percentage" element={<CGPAToPercentage />} />
        <Route path="/attendance-shortage-calculator" element={<AttendanceShortageCalculator />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gpa-calculator" element={<GPACalculator />} />
        <Route path="/sgpa-calculator" element={<SGPAcalculator />} />
        <Route path="/semester-percentage-calculator" element={<SemesterPercentageCalculator />}/>
        <Route path="/study-timetable-generator" element={<StudyTimetableGenerator />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;