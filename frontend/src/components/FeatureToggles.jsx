import { useState } from "react";
import Toggle from "./Toggle";
import FeatureTogglesHeader from "./FeatureTogglesHeader";
import TextButton from "./TextButton";
import ToggleModal from "./ToggleModal";

export default function FeatureToggles() {
  const [isEditing, setIsEditing] = useState(false);
  const [toggles, setToggles] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false); // New state for modal

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleAddToggle() {
    setToggles([
      ...toggles,
      { toggleName: `New Toggle ${toggles.length + 1}` },
    ]);
    closeModal();
  }

  return (
    <div>
      <FeatureTogglesHeader />
      <section className="bg-stone-700 min-h-screen flex flex-col items-center text-white">
        <div className="max-w-4xl w-full mt-8 sm:mt-32">
          <div className="flex flex-col sm:flex-row px-5 justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-500 mb-4 sm:mb-0">
              Toggles
            </h1>
            {isEditing ? (
              <TextButton onClick={handleSave}>Save</TextButton>
            ) : (
              <TextButton onClick={handleEdit}>Edit</TextButton>
            )}
          </div>
          <hr className="border-t border-white border-solid my-4 w-full"></hr>
          <ol>
            <li className="w-full">
              <Toggle toggleName="Toggle 1" />
              {isEditing && (
                <TextButton textModifier="text-red-700 text-sm">
                  Delete
                </TextButton>
              )}
            </li>
            <li>
              <Toggle toggleName="Toggle 2" />
              {isEditing && (
                <TextButton textModifier="text-red-700 text-sm">
                  Delete
                </TextButton>
              )}
            </li>
            <li>
              <Toggle toggleName="Toggle 3" />
              {isEditing && (
                <TextButton textModifier="text-red-700 text-sm">
                  Delete
                </TextButton>
              )}
            </li>
          </ol>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold m-4 py-2 px-4 rounded-full"
            onClick={openModal}
          >
            +
          </button>

          {isModalOpen && (
            <ToggleModal onAddToggle={handleAddToggle} onCancel={closeModal} />
          )}
        </div>
      </section>
    </div>
  );
}
