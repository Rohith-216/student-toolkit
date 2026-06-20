import { useState } from "react";
import { tools } from "../data/tools";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Layout title="">
      <Helmet>
        <title>StudentToolkit | Free Tools for Students</title>
        <meta
          name="description"
          content="Free calculators and productivity tools for students and freshers."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            StudentToolkit
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Free calculators and productivity tools
            for students and freshers.
          </p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-full sm:max-w-xl p-4 rounded-xl text-black"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p>Student Tools</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-3xl font-bold text-green-600">Free</h3>
            <p>Forever to Use</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-3xl font-bold text-purple-600">Instant</h3>
            <p>Results & Calculations</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full px-4 py-10 sm:px-6">
          {/* Featured Tools Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">
                Featured Tools
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/attendance-shortage-calculator"
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 text-2xl">
                  📉
                </span>
                <h3 className="font-bold text-xl">
                  Attendance Shortage Calculator
                </h3>
              </div>
              <p className="text-gray-600">
                Find how many classes you need to reach your attendance target.
              </p>
              </Link>

              <Link
                to="/cgpa-calculator"
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 text-2xl">
                    🎓
                  </span>
                  <h3 className="font-bold text-xl">
                    CGPA Calculator
                  </h3>
                </div>
                <p className="text-gray-600">
                  Calculate your CGPA instantly.
                </p>
              </Link>

              <Link
                to="/study-timetable-generator"
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 text-2xl">
                    🗓️
                  </span>
                  <h3 className="font-bold text-xl">
                    Study Timetable Generator
                  </h3>
                </div>
                <p className="text-gray-600">
                  Generate a study schedule in seconds.
                </p>
              </Link>
            </div>
          </div>

          {/* Popular Tools Section */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredTools.length} tools available
            </p>
            <h2 className="text-3xl font-bold">
              Popular Tools
            </h2>

            <p className="text-gray-600 mt-2">
              Free calculators and productivity tools for students.
            </p>
          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col min-h-[220px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 text-2xl">
                    {tool.icon}
                  </span>
                  <h3 className="font-bold text-xl">
                    {tool.name}
                  </h3>
                </div>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-block mb-3">
                  {tool.category}
                </span>

                <p className="text-gray-600 flex-grow">
                  {tool.description}
                </p>

                <p className="mt-4 text-blue-600 font-semibold">
                  Open Tool →
                </p>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                10+
              </h3>
              <p className="text-gray-700 font-semibold">
                Free Tools
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                100%
              </h3>
              <p className="text-gray-700 font-semibold">
                Free to Use
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                24/7
              </h3>
              <p className="text-gray-700 font-semibold">
                Available Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
