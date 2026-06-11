import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function GPACalculator() {
  const [grades, setGrades] = useState("");
  const [gpa, setGpa] = useState("");

  const calculate = () => {
    const values = grades
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));

    if (values.length === 0) return;

    const result =
      values.reduce((a, b) => a + b, 0) /
      values.length;

    setGpa(result.toFixed(2));
  };

  return (
    <Layout title="GPA Calculator">
      <Helmet>
        <title>GPA Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free GPA calculator for students."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <label className="block mb-2 font-semibold">
            Enter Grade Points
          </label>

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
            Calculate GPA
          </button>

          {gpa && (
            <div className="mt-6 text-xl font-bold">
              GPA: {gpa}
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}