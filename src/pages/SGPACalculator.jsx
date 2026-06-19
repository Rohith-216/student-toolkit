import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function SGPACalculator() {
  const [grades, setGrades] = useState("");
  const [sgpa, setSgpa] = useState("");

  const calculate = () => {
    const values = grades
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));

    if (!values.length) return;

    const result =
      values.reduce((a, b) => a + b, 0) /
      values.length;

    setSgpa(result.toFixed(2));
  };

  return (
    <Layout title="SGPA Calculator">
      <Helmet>
        <title>SGPA Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free SGPA calculator for students."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <input
            type="text"
            placeholder="8,9,7,10,8"
            value={grades}
            onChange={(e) => setGrades(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <button
            onClick={calculate}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Calculate SGPA
          </button>

          {sgpa && (
            <div className="mt-6 text-xl font-bold">
              SGPA: {sgpa}
            </div>
          )}
        </div>
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            What is SGPA?
          </h2>

          <p className="mb-4">
            SGPA (Semester Grade Point Average) is the average of grade points
            obtained in all subjects taken during a particular semester.
          </p>

          <div className="bg-gray-100 p-4 rounded-xl font-semibold">
            SGPA = Sum of Grade Points ÷ Number of Subjects
          </div>

          <p className="mt-4">
            Example: If your grade points for a semester are 8, 9, 7, 10 and 8,
            your SGPA is 8.4.
          </p>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                What is SGPA?
              </h3>
              <p>
                SGPA stands for Semester Grade Point Average and reflects performance in a single semester.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                How is SGPA calculated?
              </h3>
              <p>
                SGPA is calculated by averaging the grade points obtained in all subjects.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is SGPA used for CGPA calculation?
              </h3>
              <p>
                Yes. CGPA is generally calculated using SGPAs from all semesters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}