import { useState } from "react";
import { XIcon } from "lucide-react";
import pageunderconstruc from "../assets/page_under_construction.webp"
import Image from "next/image";
export default function UnderConstructionPopup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
        >
          <XIcon className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <Image
            src= {pageunderconstruc}
            alt="Under Construction"
            className="w-28  h-28 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Coming Soon!</h2>
          <p className="text-gray-600 mt-2">
            We&apos;re currently working on this page to make it amazing. Stay tuned for updates!
          </p>
          <button
            onClick={handleClose}
            className="mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
