import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto w-full px-4 py-8 sm:px-6">
        <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        <p className="mt-4 text-center sm:text-left">
          © 2026 StudentToolkit
        </p>
      </div>
    </footer>
  );
}