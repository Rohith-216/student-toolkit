import { useState } from "react";
import { tools } from "../data/tools";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase())
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              🔥 Most Popular Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/attendance-calculator"
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
              >
                <h3 className="font-bold">Attendance Calculator</h3>
              </Link>
              <Link
                to="/cgpa-calculator"
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
              >
                <h3 className="font-bold">CGPA Calculator</h3>
              </Link>
              <Link
                to="/pomodoro-timer"
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
              >
                <h3 className="font-bold">Pomodoro Timer</h3>
              </Link>
              <Link
                to="/resume-headline-generator"
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
              >
                <h3 className="font-bold">Resume Headline Generator</h3>
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">🎓 Academic</h3>
                <p className="mt-2 text-gray-600">
                  GPA, CGPA, Attendance and Percentage tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">⏳ Productivity</h3>
                <p className="mt-2 text-gray-600">
                  Timers, study planners and focus tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">💼 Career</h3>
                <p className="mt-2 text-gray-600">
                  Resume and placement preparation tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">🛠 Utilities</h3>
                <p className="mt-2 text-gray-600">
                  Everyday calculators and utilities.
                </p>
              </div>
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
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition flex flex-col h-full"
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

                <p className="mt-2 text-gray-600 flex-grow">
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
                {tools.length}+
              </h3>
              <p className="text-gray-700 font-semibold">
                Student Tools
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

          <div className="bg-white shadow-lg rounded-2xl p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">What is StudentToolkit?</h3>
                <p>
                  StudentToolkit provides free calculators, productivity tools and career tools for students and freshers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Are all tools free?</h3>
                <p>
                  Yes. Every tool on StudentToolkit is completely free to use.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Do I need an account?</h3>
                <p>
                  No. All tools work instantly without registration.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Who can use StudentToolkit?</h3>
                <p>
                  Students, freshers, job seekers and professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
