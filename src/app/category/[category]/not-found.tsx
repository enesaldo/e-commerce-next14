export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Not Found </p>
      <a
        href="/"
        className="bg-orange-800 text-white py-2 px-6 rounded hover:bg-orange-700 transition duration-200"
      >
        Home Page
      </a>
    </div>
  );
}
