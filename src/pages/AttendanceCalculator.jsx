import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function AttendanceCalculator() {
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!attended || !total) return;

    const percentage =
      (Number(attended) / Number(total)) * 100;

    setResult(percentage.toFixed(2));
  };

  return (
    <>
      <Helmet>
        <title>Attendance Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free attendance calculator for students."
        />
      </Helmet>
      <Layout title="Attendance Calculator">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <input
            type="number"
            placeholder="Classes Attended"
            className="border p-3 w-full mb-4"
            value={attended}
            onChange={(e) => setAttended(e.target.value)}
          />

          <input
            type="number"
            placeholder="Total Classes"
            className="border p-3 w-full mb-4"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />

          <button
            onClick={calculate}
            className="bg-blue-600 text-white px-5 py-3 rounded"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 text-xl font-bold">
              Attendance: {result}%
            </div>
          )}
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Attendance Percentage?
          </h2>

          <p className="mb-4">
            Attendance percentage is calculated by dividing
            the number of classes attended by the total
            number of classes conducted.
          </p>

          <div className="bg-gray-100 p-4 rounded-xl">
            Attendance % = (Classes Attended ÷ Total Classes) × 100
          </div>

          <p className="mt-4">
            Example: If you attended 45 classes out of 50,
            your attendance percentage is 90%.
          </p>
        </div>
      </Layout>
    </>
  );
}
