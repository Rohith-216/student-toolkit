import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function PercentageCalculator() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const percentage =
      (Number(obtained) / Number(total)) * 100;

    setResult(percentage.toFixed(2));
  };

  return (
    <Layout title="Percentage Calculator">
      <Helmet>
        <title>Percentage Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free percentage calculator for students."
        />
      </Helmet>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <input
          type="number"
          placeholder="Obtained Marks"
          value={obtained}
          onChange={(e) => setObtained(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <input
          type="number"
          placeholder="Total Marks"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <button
          onClick={calculate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>

        {result && (
          <h2 className="mt-6 text-xl font-bold">
            Percentage: {result}%
          </h2>
        )}
      </div>
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          What is Percentage?
        </h2>

        <p className="mb-4">
          Percentage represents a number or ratio expressed as a fraction of 100.
          It shows how much of the total you have achieved.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl font-semibold">
          Percentage = (Obtained Marks ÷ Total Marks) × 100
        </div>

        <p className="mt-4">
          Example: If you scored 45 out of 50 marks,
          your percentage is 90%.
        </p>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              How do I calculate percentage?
            </h3>
            <p>
              Percentage is calculated by dividing obtained marks by total marks and multiplying by 100.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can I calculate exam percentages?
            </h3>
            <p>
              Yes. This calculator is suitable for exams, tests, and assignments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is the result accurate?
            </h3>
            <p>
              Yes. The calculator uses the standard percentage formula.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/semester-percentage-calculator"
            className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
          >
            Semester Percentage Calculator
          </Link>
          <Link
            to="/cgpa-to-percentage"
            className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
          >
            CGPA to Percentage Calculator
          </Link>
        </div>
      </div>
    </Layout>
  );
}