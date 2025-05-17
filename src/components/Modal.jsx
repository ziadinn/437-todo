import React, { useRef } from 'react';

function Modal(props) {
  const dialogRef = useRef(null);

  if (!props.isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      props.onCloseRequested();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div ref={dialogRef} className="bg-white p-4 rounded w-1/3 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{props.headerLabel}</h2>
          <button 
            aria-label="Close" 
            className="text-black" 
            onClick={props.onCloseRequested}
          >
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Modal; 