import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function WordCounter() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return (
    <Layout title="Word Counter">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <textarea
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full border rounded-xl p-4"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Words</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">{words}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Characters</h2>
              <p className="text-3xl font-bold text-green-600 mt-2">{characters}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">What is a Word Counter?</h2>
          <p>
            A Word Counter helps you count the number of words and characters in your text. It is useful for assignments, essays, blog posts, articles, resumes, and content writing.
          </p>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What does the Word Counter do?</h3>
              <p>It counts the number of words and characters in your text instantly.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is this tool free?</h3>
              <p>Yes, the Word Counter is completely free.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I use it for essays and assignments?</h3>
              <p>Yes. It is useful for students, writers, bloggers, and professionals.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/study-timetable-generator"
              className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
            >
              Study Timetable Generator
            </Link>
            <Link
              to="/percentage-calculator"
              className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500"
            >
              Percentage Calculator
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
