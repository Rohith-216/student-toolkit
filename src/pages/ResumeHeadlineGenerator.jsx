import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function ResumeHeadlineGenerator() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [headlines, setHeadlines] = useState([]);

  const generateHeadlines = () => {
    if (!role.trim() || !skills.trim()) return;

    const generated = [
      `${role} skilled in ${skills}`,
      `Passionate ${role} with experience in ${skills}`,
      `Aspiring ${role} focused on ${skills}`,
      `${role} eager to build solutions using ${skills}`,
      `Results-driven ${role} with expertise in ${skills}`,
    ];

    setHeadlines(generated);
  };

  return (
    <Layout title="Resume Headline Generator">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <label className="block mb-4 font-semibold">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Software Engineer"
            className="w-full border rounded-xl p-4 mb-6"
          />

          <label className="block mb-4 font-semibold">Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. React, JavaScript, problem solving"
            className="w-full border rounded-xl p-4 mb-6"
          />

          <button
            onClick={generateHeadlines}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Generate Headlines
          </button>
        </div>

        {headlines.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {headlines.map((headline, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <p className="font-semibold text-gray-800">{headline}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">What is a resume headline?</h2>
          <p>
            A Resume Headline Generator helps students and freshers create professional resume headlines for internships, placements, and job applications.
          </p>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What is a resume headline?</h3>
              <p>
                A resume headline is a short statement that summarizes your skills and professional profile.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Why is a resume headline important?</h3>
              <p>
                It helps recruiters quickly understand your strengths.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Can freshers use this tool?</h3>
              <p>
                Yes. It is designed specifically for students and freshers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              to="/word-counter"
              className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
            >
              Word Counter
            </Link>
            <Link
              to="/study-timetable-generator"
              className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
            >
              Study Timetable Generator
            </Link>
            <Link
              to="/cgpa-calculator"
              className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
            >
              CGPA Calculator
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
