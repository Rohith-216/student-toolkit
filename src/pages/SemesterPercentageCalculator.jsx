import { useState } from "react";
import Layout from "../components/Layout";

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
      </div>
    </Layout>
  );
}