import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function CGPACalculator() {
  const [gpas, setGpas] = useState("");
  const [cgpa, setCgpa] = useState(null);

  const calculate = () => {
    const values = gpas
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n));

    const avg =
      values.reduce((a, b) => a + b, 0) /
      values.length;

    setCgpa(avg.toFixed(2));
  };

  return (
    <Layout title="CGPA Calculator">
      <Helmet>
        <title>CGPA Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free CGPA calculator for students."
        />
      </Helmet>
      <input
        type="text"
        placeholder="8.2, 8.5, 9.0"
        className="border p-3 w-full mb-4"
        value={gpas}
        onChange={(e) => setGpas(e.target.value)}
      />

      <button
        onClick={calculate}
        className="bg-black text-white px-5 py-3 rounded"
      >
        Calculate
      </button>

      {cgpa && (
        <h2 className="mt-4 text-xl">
          CGPA: {cgpa}
        </h2>
      )}
    </Layout>
  );
}