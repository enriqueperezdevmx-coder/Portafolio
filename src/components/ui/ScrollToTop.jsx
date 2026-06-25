import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ show, onScrollTop }) {
  if (!show) return null;

  return (
    <button
      onClick={onScrollTop}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-110"
      aria-label="Volver arriba"
    >
      <ArrowUp size={28} />
    </button>
  );
}