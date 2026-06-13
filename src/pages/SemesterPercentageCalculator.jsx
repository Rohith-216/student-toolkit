import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function SemesterPercentageCalculator() {
  const [marks, setMarks] = useState(["", "", "", "", ""]);
  const [percentage, setPercentage] = useState("");

  const handleChange = (index, value) => {
    const updated = [...marks];
    updated[index] = value;
    setMarks(updated);
  };

  const calculate = () => {
    const total = marks.reduce(
      (sum, mark) => sum + Number(mark || 0),
      0
    );

    const result = (total / 500) * 100;

    setPercentage(result.toFixed(2));
  };

  return (
    <Layout title="Semester Percentage Calculator">
      <Helmet>
        <title>Semester Percentage Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free semester percentage calculator for students."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          {marks.map((mark, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Subject ${index + 1} Marks`}
              value={mark}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              className="w-full p-4 border rounded-xl mb-4"
            />
          ))}

          <button
            onClick={calculate}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Calculate Percentage
          </button>

          {percentage && (
            <div className="mt-6 text-xl font-bold">
              Percentage: {percentage}%
            </div>
          )}
        </div>
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            How to Calculate Semester Percentage?
          </h2>

          <p className="mb-4">
            Semester percentage is calculated by dividing the total marks obtained
            by the maximum marks (usually 500 for 5 subjects) and multiplying by 100.
          </p>

          <div className="bg-gray-100 p-4 rounded-xl font-semibold">
            Percentage = (Total Marks ÷ 500) × 100
          </div>

          <p className="mt-4">
            Example: If you scored 420 marks out of 500 in a semester,
            your percentage is 84%.
          </p>
        </div>
      </div>
    </Layout>
  );
}