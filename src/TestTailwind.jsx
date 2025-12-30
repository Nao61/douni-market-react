import React from 'react';

export default function TestTailwind() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind CSS fonctionne !
        </h1>
        <p className="text-gray-600">
          Si tu vois ce style, l'installation est réussie.
        </p>
      </div>
    </div>
  );
}
