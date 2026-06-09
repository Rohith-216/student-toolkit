import { useState } from "react";
import Layout from "../components/Layout";

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
      </div>
    </Layout>
  );
}