import React from 'react';
import { ECONOMIC_HIGHLIGHTS, SOURCE_FOOTER } from './data/economicData';
import { InfographicBox } from './components/InfographicBox';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center p-3 sm:p-6 lg:p-8 font-sans transition-colors duration-300">
      
      {/* Main Infographic Box */}
      <main className="w-full max-w-6xl mx-auto flex justify-center items-center">
        <InfographicBox
          data={ECONOMIC_HIGHLIGHTS}
          sourceFooter={SOURCE_FOOTER}
          replayKey={0}
        />
      </main>

    </div>
  );
}
