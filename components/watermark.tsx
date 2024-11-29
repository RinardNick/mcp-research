'use client';

import React from 'react';

export const Watermark: React.FC = () => {
  return (
    <div 
      className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.15] rotate-[-45deg] select-none"
      style={{ 
        zIndex: 9999,
        fontSize: '3vw',
        fontWeight: 'bold',
        color: '#000000',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      AI GENERATED CONTENT - NOT FOR OFFICIAL PURPOSES
    </div>
  );
};

export default Watermark;