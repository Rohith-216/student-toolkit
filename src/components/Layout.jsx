import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto p-6">
          {title && (
            <h1 className="text-3xl font-bold mb-6">
              {title}
            </h1>
          )}

          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}