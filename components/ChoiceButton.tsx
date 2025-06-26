
import React from 'react';

interface ChoiceButtonProps {
  choiceText: string;
  onChoose: (choice: string) => void;
  disabled?: boolean;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choiceText, onChoose, disabled }) => {
  return (
    <button
      onClick={() => onChoose(choiceText)}
      disabled={disabled}
      className="w-full text-left bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-150 ease-in-out choice-button focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
    >
      {choiceText}
    </button>
  );
};

export default ChoiceButton;
    