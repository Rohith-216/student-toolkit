import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function CGPAToPercentage() {
  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState("");

  const calculate = () => {
    const result = Number(cgpa) * 9.5;
    setPercentage(result.toFixed(2));
  };

  return (
    <Layout title="CGPA to Percentage Converter">
      <Helmet>
        <title>CGPA to Percentage Converter | StudentToolkit</title>
        <meta
          name="description"
          content="Free CGPA to percentage converter for students."
        />
      </Helmet>
      <div className="bg-white p-6 rounded-xl shadow">
        <input
          type="number"
          step="0.01"
          placeholder="Enter CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <button
          onClick={calculate}
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          Convert
        </button>

        {percentage && (
          <div className="mt-5 text-xl font-bold">
            Percentage: {percentage}%
          </div>
        )}
      </div>
    </Layout>
  );
}