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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12 mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            StudentToolkit
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Free calculators and productivity tools
            for students and freshers.
          </p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-xl p-4 rounded-xl text-black"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
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
                <h3 className="font-bold text-xl mb-2">
                  {tool.name}
                </h3>

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
        </div>
      </div>
    </Layout>
  );
}
