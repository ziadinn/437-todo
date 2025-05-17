import React, { useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onCloseRequested: () => void;
  headerLabel: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onCloseRequested, headerLabel, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCloseRequested();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div ref={dialogRef} className="bg-white p-4 rounded w-1/3 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button 
            aria-label="Close" 
            className="text-black" 
            onClick={onCloseRequested}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal; 