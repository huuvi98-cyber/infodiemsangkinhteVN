import React, { useState, useEffect } from 'react';
import { EconomicHighlight } from '../types';
import { GdpIllustration } from './illustrations/GdpIllustration';
import { FdiIllustration } from './illustrations/FdiIllustration';
import { BusinessIllustration } from './illustrations/BusinessIllustration';
import { TradeIllustration } from './illustrations/TradeIllustration';
import { InfrastructureIllustration } from './illustrations/InfrastructureIllustration';
import { AnimatedCounter } from './AnimatedCounter';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Props {
  data: EconomicHighlight[];
  replayKey: number;
  onSelectHighlight: (item: EconomicHighlight) => void;
}

export const SlideshowView: React.FC<Props> = ({ data, replayKey, onSelectHighlight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, data.length]);

  const currentItem = data[currentIndex];

  const getIllustration = (id: string) => {
    switch (id) {
      case 'gdp':
        return <GdpIllustration isHovered={true} />;
      case 'fdi':
        return <FdiIllustration isHovered={true} />;
      case 'enterprise':
        return <BusinessIllustration isHovered={true} />;
      case 'trade':
        return <TradeIllustration isHovered={true} />;
      case 'infrastructure':
        return <InfrastructureIllustration isHovered={true} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl transition-all relative overflow-hidden">
      
      {/* Top Slide Counter */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
          Trình chiếu {currentIndex + 1} / {data.length}
        </span>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" /> Tạm dừng
            </>
          ) : (
            <>
              <Play className="w-4 h-4 text-emerald-600" /> Tự động phát
            </>
          )}
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 py-4">
        
        {/* Vector Artwork */}
        <div className="w-full md:w-1/2 flex justify-center scale-125 my-6 md:my-0">
          {getIllustration(currentItem.id)}
        </div>

        {/* Text Details */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-950/80 rounded-full text-blue-900 dark:text-blue-200 font-extrabold text-xl sm:text-2xl">
            <AnimatedCounter
              value={currentItem.number}
              formattedText={currentItem.formattedMetric}
              triggerKey={`${replayKey}-${currentIndex}`}
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
            {currentItem.title}
          </h3>

          <p className="text-base text-slate-600 dark:text-slate-300 font-medium">
            {currentItem.subtext}
          </p>

          <button
            onClick={() => onSelectHighlight(currentItem)}
            className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-blue-600/20 transition-all"
          >
            Mở bảng chi tiết
          </button>
        </div>

      </div>

      {/* Navigation Controls */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))}
          className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % data.length)}
          className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-600 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
