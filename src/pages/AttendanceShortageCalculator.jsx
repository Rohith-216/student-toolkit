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

    const x = Math.ceil(
      ((R * T) - (100 * A)) / (100 - R)
    );

    setResult(x <= 0 ? 0 : x);
  };

  return (
    <Layout title="Attendance Shortage Calculator">
      <div className="bg-white p-6 rounded-xl shadow">
        <input
          type="number"
          placeholder="Classes Attended"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <input
          type="number"
          placeholder="Total Classes"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <input
          type="number"
          placeholder="Required Attendance %"
          value={required}
          onChange={(e) => setRequired(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <button
          onClick={calculate}
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          Calculate
        </button>

        {result !== "" && (
          <div className="mt-4 text-xl font-bold">
            You need {result} more classes.
          </div>
        )}
      </div>
    </Layout>
  );
}