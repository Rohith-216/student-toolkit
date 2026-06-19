import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl font-bold text-blue-600">
                404
            </h1>

            <h2 className="text-2xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-600 mt-2 text-center">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
                Go Back Home
            </Link>
        </div>
    );
}