
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  imagePrompt: string | null;
  isLoadingImage: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, imagePrompt, isLoadingImage }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-xl aspect-w-16 aspect-h-9 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
      {isLoadingImage ? (
        <div className="flex flex-col items-center text-gray-400">
          <LoadingSpinner size="w-16 h-16" />
          <p className="mt-4">ビジュアルを生成中...</p>
        </div>
      ) : imageUrl ? (
        <img 
            src={`data:image/jpeg;base64,${imageUrl}`} 
            alt={imagePrompt || '冒険のシーン'} 
            className="object-contain max-w-full max-h-full rounded-md"
        />
      ) : (
        <div className="text-gray-500 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>ここにビジュアルが表示されます。</p>
          {imagePrompt && <p className="text-sm mt-1">{`画像生成待機中: 「${imagePrompt}」`}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;