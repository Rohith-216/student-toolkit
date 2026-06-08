import { useState } from "react";
import Layout from "../components/Layout";

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
      <div className="p-8">
        <input
          type="number"
          placeholder="Obtained Marks"
          value={obtained}
          onChange={(e) => setObtained(e.target.value)}
          className="border p-3 block mb-4"
        />

        <input
          type="number"
          placeholder="Total Marks"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border p-3 block mb-4"
        />

        <button
          onClick={calculate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>

        {result && (
          <h2 className="mt-4 text-xl">
            Percentage: {result}%
          </h2>
        )}
      </div>
    </Layout>
  );
}