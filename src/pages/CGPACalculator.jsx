import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function CGPACalculator() {
  const [gpas, setGpas] = useState("");
  const [cgpa, setCgpa] = useState(null);

  const calculate = () => {
    const values = gpas
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));

    const avg =
      values.reduce((a, b) => a + b, 0) /
      values.length;

    setCgpa(avg.toFixed(2));
  };

  return (
    <Layout title="CGPA Calculator">
      <Helmet>
        <title>CGPA Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free CGPA calculator for students."
        />
      </Helmet>
      <input
        type="text"
        placeholder="8.2, 8.5, 9.0"
        className="border p-3 w-full mb-4"
        value={gpas}
        onChange={(e) => setGpas(e.target.value)}
      />

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-5 py-3 rounded"
      >
        Calculate
      </button>

      {cgpa && (
        <h2 className="mt-4 text-xl">
          CGPA: {cgpa}
        </h2>
      )}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          What is CGPA?
        </h2>

        <p className="mb-4">
          CGPA (Cumulative Grade Point Average) is the average
          of grade points obtained across all semesters or subjects.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl font-semibold">
          CGPA = Sum of Grade Points ÷ Number of Subjects
        </div>

        <p className="mt-4">
          Example: If your grade points are 8, 9, 7, 10 and 8,
          your CGPA is 8.4.
        </p>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              What is CGPA?
            </h3>
            <p>
              CGPA (Cumulative Grade Point Average) is the average of grade points obtained across all subjects or semesters.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How is CGPA calculated?
            </h3>
            <p>
              CGPA is calculated by dividing the sum of all grade points by the total number of subjects.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is CGPA important for placements?
            </h3>
            <p>
              Yes. Many companies use CGPA as one of the eligibility criteria during placements.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}