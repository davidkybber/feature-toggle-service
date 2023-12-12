export default function FeatureTogglesHeader() {
  return (
    <header className="bg-green-500 p-4 flex flex-col sm:flex-row justify-between items-center">
      <button className="invisible bg-white text-green-500 px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2">
        Sign Out
      </button>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-0">
        Feature Toggle Service
      </h1>
      <button className="bg-white text-green-500 px-4 py-2 rounded-md">
        Sign Out
      </button>
    </header>
  );
}
