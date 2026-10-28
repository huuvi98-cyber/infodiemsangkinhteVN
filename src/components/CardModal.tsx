import React from 'react';
import { EconomicHighlight } from '../types';
import { GdpIllustration } from './illustrations/GdpIllustration';
import { FdiIllustration } from './illustrations/FdiIllustration';
import { BusinessIllustration } from './illustrations/BusinessIllustration';
import { TradeIllustration } from './illustrations/TradeIllustration';
import { InfrastructureIllustration } from './illustrations/InfrastructureIllustration';
import { X, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

interface Props {
  highlight: EconomicHighlight | null;
  onClose: () => void;
}

export const CardModal: React.FC<Props> = ({ highlight, onClose }) => {
  if (!highlight) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            <TrendingUp className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Chi tiết chỉ số kinh tế
          </span>
        </div>

        {/* Illustration */}
        <div className="flex justify-center my-4 scale-110">
          {getIllustration(highlight.id)}
        </div>

        {/* Content Title & Subtext */}
        <div className="text-center space-y-2 mt-2">
          <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-full text-blue-800 dark:text-blue-300 font-extrabold text-2xl">
            {highlight.formattedMetric}
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            {highlight.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
            {highlight.subtext}
          </p>
        </div>

        {/* Breakdown Stats List */}
        {highlight.detailStats && highlight.detailStats.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4 text-blue-600" /> Dữ liệu phân tích
            </h4>
            <div className="space-y-2">
              {highlight.detailStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                >
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {stat.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                    {stat.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 rounded-md">
                        {stat.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-6 pt-4 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-xs hover:opacity-90 transition-opacity"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
