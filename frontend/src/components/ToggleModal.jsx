export default function ToggleModal({ onAddToggle, onCancel }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md flex flex-col space-y-5">
        <input
          type="text"
          className=" text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 rounded-md"
          placeholder="Toggle Name"
        />
        <div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={onAddToggle}
          >
            Add Toggle
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 ml-4"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
