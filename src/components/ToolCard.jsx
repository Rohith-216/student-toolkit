import { Link } from "react-router-dom";

export default function ToolCard({
  title,
  description,
  link
}) {
  return (
    <Link
      to={link}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 block"
    >
      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>

      <p className="mt-4 text-blue-600 font-semibold">
        Open Tool →
      </p>
      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
        {category}
      </span>
    </Link>
  );
}