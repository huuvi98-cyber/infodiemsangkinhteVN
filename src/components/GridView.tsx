import React from 'react';
import { EconomicHighlight } from '../types';
import { GdpIllustration } from './illustrations/GdpIllustration';
import { FdiIllustration } from './illustrations/FdiIllustration';
import { BusinessIllustration } from './illustrations/BusinessIllustration';
import { TradeIllustration } from './illustrations/TradeIllustration';
import { InfrastructureIllustration } from './illustrations/InfrastructureIllustration';
import { AnimatedCounter } from './AnimatedCounter';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  data: EconomicHighlight[];
  replayKey: number;
  onSelectHighlight: (item: EconomicHighlight) => void;
}

export const GridView: React.FC<Props> = ({ data, replayKey, onSelectHighlight }) => {
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
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onSelectHighlight(item)}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Background Radial Glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all" />

            {/* Header / Number Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold text-sm flex items-center justify-center">
                0{idx + 1}
              </span>
              <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            {/* Illustration */}
            <div className="flex justify-center my-2">
              {getIllustration(item.id)}
            </div>

            {/* Title & Metric */}
            <div className="space-y-2 mt-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {item.subtext}
              </p>
            </div>

            {/* Interactive Stat Tag */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Chỉ số 9 tháng</span>
              <span className="text-sm font-extrabold text-blue-700 dark:text-blue-400">
                <AnimatedCounter value={item.number} formattedText={item.formattedMetric} triggerKey={replayKey} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
