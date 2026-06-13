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
      </div>
    </Layout>
  );
}