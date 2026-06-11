import { useState } from "react";
import Layout from "../components/Layout";

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
      </div>
    </Layout>
  );
}