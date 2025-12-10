import { createPortal } from "react-dom";

export default function AddProductModal({ children, onClose }) {
  return createPortal(
    <>
      
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

     
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-white rounded-lg p-6 w-[400px] max-w-[90%] relative"
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            X
          </button>

          {children}
        </div>
      </div>
    </>,
    document.body
  );
}
