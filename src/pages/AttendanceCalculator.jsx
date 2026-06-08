import { useState } from "react";
import Layout from "../components/Layout";

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
          className="bg-black text-white px-5 py-3 rounded"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-6 text-xl font-bold">
            Attendance: {result}%
          </div>
        )}
      </div>
    </Layout>
  );
}
