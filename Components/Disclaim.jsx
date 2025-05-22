'use client'; 
import { useState } from 'react';

export default function Disclaim() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!accepted) {
      setError(true);
    } else {
   
      alert('Terms accepted. Proceeding...');
    }
  };

  return (
    <div className="bg-gray-200 py-10 px-6 sm:px-12 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-lg font-semibold">Please read and accept the disclaimer to proceed</h2>

        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 border border-gray-400 rounded"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              if (error) setError(false);
            }}
          />
          <span>I accept the terms of the disclaimer.</span>
        </label>

        {error && <p className="text-red-600 text-sm">You must accept the terms to proceed.</p>}

        <button
          onClick={handleSubmit}
          className="mt-4 inline-block px-6 py-2 bg-teal-400 text-white font-semibold rounded hover:bg-teal-500 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
