import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto w-full px-4 py-4 flex flex-wrap justify-between items-center gap-4 sm:px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          🎓 StudentToolkit
        </Link>

        <div className="flex flex-wrap gap-4 items-center justify-end text-sm sm:text-base">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}