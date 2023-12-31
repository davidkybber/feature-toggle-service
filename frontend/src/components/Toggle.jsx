import { useState } from "react";

export default function Toggle({ toggleName }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-600">
      <span className="text-white">{toggleName}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={handleToggle}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      </label>
    </div>
  );
}
