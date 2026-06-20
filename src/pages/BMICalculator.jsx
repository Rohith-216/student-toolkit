import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

const getBMICategory = (value) => {
  if (value < 18.5) return "Underweight";
  if (value < 24.9) return "Normal weight";
  if (value < 29.9) return "Overweight";
  return "Obesity";
};

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = Number(height) / 100;
    const w = Number(weight);

    if (!h || !w) return;

    const result = w / (h * h);
    const fixed = result.toFixed(2);
    setBmi(fixed);
    setCategory(getBMICategory(result));
  };

  return (
    <Layout title="BMI Calculator">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <label className="block mb-2 font-semibold">Enter your height and weight</label>

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <button
            onClick={calculateBMI}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="text-xl font-bold">BMI: {bmi}</div>
              <div className="mt-2 text-gray-700">Category: {category}</div>
              <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-xl text-sm text-yellow-900">
                Caution: BMI is a general indicator and does not account for muscle mass, bone density, age, or body composition. For a complete assessment of your health, consult a healthcare professional.
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">What is BMI?</h2>
          <p className="mb-4">
            Body Mass Index (BMI) is a simple calculation that compares your weight and height to estimate whether your body mass is within a healthy range.
          </p>
          <div className="bg-gray-100 p-4 rounded-xl font-semibold">
            BMI = weight (kg) ÷ height (m²)
          </div>
          <p className="mt-4">
            Example: If you weigh 70 kg and are 170 cm tall, your BMI is 70 ÷ (1.7 × 1.7) = 24.22.
          </p>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Is BMI enough to assess my health?</h3>
              <p>
                No. BMI is only one indicator. It does not distinguish between muscle and fat, so people with higher muscle mass may have a higher BMI but still be healthy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What are the BMI categories?</h3>
              <p>
                The common categories are Underweight, Normal weight, Overweight, and Obesity. These categories give a general idea of where your BMI falls.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Can I use this calculator for any age?</h3>
              <p>
                This calculator is a general tool for adults. For children, teens, or people with special medical conditions, consult a healthcare professional.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
          <div className="grid gap-4 sm:grid-cols-1">
            <Link
              to="/age-calculator"
              className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
            >
              Age Calculator
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}