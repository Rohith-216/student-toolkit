import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function AttendanceShortageCalculator() {
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");
  const [required, setRequired] = useState("75");
  const [result, setResult] = useState("");

  const calculate = () => {
    const A = Number(attended);
    const T = Number(total);
    const R = Number(required);

    if (!A || !T || !R) return;

    const x = Math.ceil(
      ((R * T) - (100 * A)) / (100 - R)
    );

    setResult(x <= 0 ? 0 : x);
  };

  return (
    <>
      <Helmet>
        <title>Attendance Shortage Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free attendance shortage calculator for students."
        />
      </Helmet>
      <Layout title="Attendance Shortage Calculator">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <input
              type="number"
              placeholder="Classes Attended"
              value={attended}
              onChange={(e) => setAttended(e.target.value)}
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="number"
              placeholder="Total Classes"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="number"
              placeholder="Required Attendance %"
              value={required}
              onChange={(e) => setRequired(e.target.value)}
              className="w-full p-4 border rounded-xl mb-4"
            />

            <button
              onClick={calculate}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Calculate
            </button>

            {result !== "" && (
              <div className="mt-6 text-xl font-bold">
                You need {result} more classes to reach {required}% attendance.
              </div>
            )}
          </div>
          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              About Attendance Shortage Calculator
            </h2>

            <p className="mb-4">
              This calculator helps you determine how many more classes you need to attend
              to reach your desired attendance percentage.
            </p>

            <div className="bg-gray-100 p-4 rounded-xl font-semibold">
              Classes Needed = (Required % × Total Classes - 100 × Classes Attended) ÷ (100 - Required %)
            </div>

            <p className="mt-4">
              Example: If you attended 30 classes out of 50 and need 75% attendance,
              you need to attend 5 more classes.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}