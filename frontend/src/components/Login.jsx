export default function Login({ onLogin }) {
  return (
    <section className="bg-stone-700 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 mb-6">
          Welcome
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 rounded-md"
            placeholder="Username"
          />
          <input
            type="password"
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 rounded-md"
            placeholder="Password"
          />
          <button
            onClick={onLogin}
            className="bg-green-500 text-white rounded-full px-4 py-2 w-full md:w-32 transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
