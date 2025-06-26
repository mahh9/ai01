
import React from 'react';

interface StoryDisplayProps {
  story: string;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ story }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl mb-6 max-h-96 overflow-y-auto">
      <p className="text-lg leading-relaxed whitespace-pre-line text-gray-300">
        {story}
      </p>
    </div>
  );
};

export default StoryDisplay;
    