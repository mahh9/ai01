
import React from 'react';

interface ErrorDisplayProps {
  message: string | null;
  isCritical?: boolean;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, isCritical = false }) => {
  if (!message) return null;

  return (
    <div className={`p-4 my-4 rounded-md ${isCritical ? 'bg-red-700 border-red-900 text-red-100' : 'bg-yellow-700 border-yellow-900 text-yellow-100'} border`}>
      <p className="font-semibold">{isCritical ? '重大なエラー' : 'エラー'}:</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;