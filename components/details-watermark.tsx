'use client';

import React from 'react';

export const DetailsWatermark: React.FC = () => {
  return (
    <div className="absolute left-0 right-0 top-4 flex justify-center">
      <div 
        className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 shadow-sm"
        style={{ 
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: '#DC2626',
        }}
      >
        AI Generated Content - Not For Official Purposes
      </div>
    </div>
  );
};

export default DetailsWatermark;