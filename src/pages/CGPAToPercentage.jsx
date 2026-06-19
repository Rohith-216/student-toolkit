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
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          How to Convert CGPA to Percentage?
        </h2>

        <p className="mb-4">
          Percentage can be calculated from CGPA by multiplying it with a conversion
          factor. Most universities use 9.5 as the conversion factor.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl font-semibold">
          Percentage = CGPA × 9.5
        </div>

        <p className="mt-4">
          Example: If your CGPA is 8.5, your percentage is 80.75%.
        </p>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              How do I convert CGPA to percentage?
            </h3>
            <p>
              Many institutions use Percentage = CGPA × 9.5 to convert CGPA into percentage.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is the conversion formula the same everywhere?
            </h3>
            <p>
              No. Different universities may use different conversion formulas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can I use this calculator for any university?
            </h3>
            <p>
              Yes, but verify your university's official conversion rule.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}