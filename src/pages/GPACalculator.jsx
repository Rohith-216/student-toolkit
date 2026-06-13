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
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            What is GPA?
          </h2>

          <p className="mb-4">
            GPA (Grade Point Average) is the average of all grade points
            obtained in all subjects or courses taken during a semester or degree.
          </p>

          <div className="bg-gray-100 p-4 rounded-xl font-semibold">
            GPA = Sum of Grade Points ÷ Number of Subjects
          </div>

          <p className="mt-4">
            Example: If your grade points are 8, 9, 7, and 10,
            your GPA is 8.5.
          </p>
        </div>
      </div>
    </Layout>
  );
}