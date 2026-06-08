import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-5">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="mt-4">
          © 2026 StudentToolkit
        </p>
      </div>
    </footer>
  );
}