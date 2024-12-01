"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={`flex flex-col items-center justify-center text-center p-4 ${
        open ? "h-auto" : "h-[50vh]"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="cursor-pointer select-none">
        {!open ? (
          <h1 className="text-2xl md:text-4xl font-bold text-white animate-bounce">
            Tap to Open
          </h1>
        ) : (
          <>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeIn">
              Happy 21st Anniversary ❤️
            </h1>
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white animate-scaleIn">
              <img
                src="/mom-dad-1.jpg"
                alt="Mom & Dad"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-6 text-lg md:text-2xl text-white animate-fadeIn">
              Wishing you both endless love and happiness!
            </p>
            <p className="mt-4 text-sm md:text-lg text-white font-light animate-fadeIn">
              Made with love by Babi ❤️
            </p>
          </>
        )}
      </div>
    </main>
  );
}
