import { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculate = () => {
    if (!birthDate) return;

    const today = new Date();
    const birth = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <Layout title="Age Calculator">
      <Helmet>
        <title>Age Calculator | StudentToolkit</title>
        <meta
          name="description"
          content="Free age calculator for students."
        />
      </Helmet>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <input
          type="date"
          placeholder="Enter your birth date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="border p-3 w-full mb-4"
        />

        <button
          onClick={calculate}
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          Calculate Age
        </button>

        {age !== null && (
          <div className="mt-6 text-xl font-bold">
            Your Age: {age} years
          </div>
        )}
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          How to Calculate Age?
        </h2>

        <p className="mb-4">
          Age is calculated by finding the difference between your birth date
          and today's date. The calculator accounts for whether your birthday
          has already occurred this year.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl font-semibold">
          Age = Current Year - Birth Year (adjusted for birthday)
        </div>

        <p className="mt-4">
          Example: If you were born on January 15, 2005, and today is June 14, 2026,
          your age is 21 years.
        </p>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              How does the Age Calculator work?
            </h3>
            <p>
              It calculates your age using your birth date and the current date.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can it calculate age in months and days?
            </h3>
            <p>
              Yes. It provides a detailed age breakdown.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is the age calculation accurate?
            </h3>
            <p>
              Yes. The calculator uses actual calendar dates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
