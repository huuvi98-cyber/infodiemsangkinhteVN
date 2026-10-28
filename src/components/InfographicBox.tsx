import React from 'react';
import { EconomicHighlight } from '../types';
import { GdpIllustration } from './illustrations/GdpIllustration';
import { FdiIllustration } from './illustrations/FdiIllustration';
import { BusinessIllustration } from './illustrations/BusinessIllustration';
import { TradeIllustration } from './illustrations/TradeIllustration';
import { InfrastructureIllustration } from './illustrations/InfrastructureIllustration';
import { AnimatedCounter } from './AnimatedCounter';

interface Props {
  data: EconomicHighlight[];
  sourceFooter: string;
  replayKey: number;
}

export const InfographicBox: React.FC<Props> = ({
  data,
  sourceFooter,
  replayKey
}) => {
  const gdpItem = data.find((d) => d.id === 'gdp')!;
  const fdiItem = data.find((d) => d.id === 'fdi')!;
  const enterpriseItem = data.find((d) => d.id === 'enterprise')!;
  const tradeItem = data.find((d) => d.id === 'trade')!;
  const infraItem = data.find((d) => d.id === 'infrastructure')!;

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-5 lg:p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      
      {/* Outer Blue Bracket Frame */}
      <div className="relative p-3 sm:p-6 md:p-8 border-2 sm:border-3 border-blue-600 dark:border-blue-500 rounded-3xl bg-slate-50/50 dark:bg-slate-900/60">
        
        {/* Main Title Banner Pill */}
        <div className="relative -mt-8 sm:-mt-11 mb-6 sm:mb-10 text-center">
          <div className="inline-flex items-center justify-center px-6 sm:px-12 py-2.5 sm:py-3.5 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white rounded-full shadow-lg shadow-blue-600/20 border-2 sm:border-4 border-white dark:border-slate-900">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-sm font-sans">
              Điểm sáng kinh tế Việt Nam 9 tháng năm 2026
            </h1>
          </div>
        </div>

        {/* TOP ROW: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* CARD 1: GDP */}
          <div className="bg-white/90 dark:bg-slate-800/80 p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col items-center text-center">
            {/* Illustration */}
            <div className="mb-2">
              <GdpIllustration isHovered={true} />
            </div>

            {/* Metric Banner Pill */}
            <div className="w-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 rounded-2xl py-3 px-4 mb-3 shadow-inner">
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                {gdpItem.title}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-700 dark:text-blue-400 tracking-tight leading-none">
                <AnimatedCounter value={9.01} formattedText="9,01%" triggerKey={replayKey} />
              </div>
            </div>

            {/* Subtext */}
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
              Đạt mức tăng cao nhất
              <br />
              trong 15 năm qua
            </p>
          </div>

          {/* Dotted Vertical Divider 1 */}
          <div className="hidden md:block absolute left-[33.3%] top-4 bottom-4 w-px border-r-2 border-dashed border-sky-400/60 dark:border-sky-500/40 pointer-events-none" />

          {/* CARD 2: FDI */}
          <div className="bg-white/90 dark:bg-slate-800/80 p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col items-center text-center">
            {/* Illustration */}
            <div className="mb-2">
              <FdiIllustration isHovered={true} />
            </div>

            {/* Metric Banner Pill */}
            <div className="w-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 rounded-2xl py-3 px-4 mb-3 shadow-inner">
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                Vốn FDI đăng ký đạt
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-700 dark:text-blue-400 tracking-tight mt-1 leading-tight">
                <AnimatedCounter value={50.4} formattedText="gần 50,4 tỷ USD" triggerKey={replayKey} />
              </div>
            </div>

            {/* Subtext */}
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
              Tăng 76,4%; vốn FDI thực hiện
              <br />
              ước đạt trên 21 tỷ USD
            </p>
          </div>

          {/* Dotted Vertical Divider 2 */}
          <div className="hidden md:block absolute left-[66.6%] top-4 bottom-4 w-px border-r-2 border-dashed border-sky-400/60 dark:border-sky-500/40 pointer-events-none" />

          {/* CARD 3: ENTERPRISE */}
          <div className="bg-white/90 dark:bg-slate-800/80 p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col items-center text-center">
            {/* Illustration */}
            <div className="mb-2">
              <BusinessIllustration isHovered={true} />
            </div>

            {/* Metric Banner Pill */}
            <div className="w-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 rounded-2xl py-3 px-4 mb-3 shadow-inner">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-700 dark:text-blue-400 tracking-tight leading-tight">
                <AnimatedCounter value={224000} formattedText="Gần 224.000" triggerKey={replayKey} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">
                doanh nghiệp gia nhập thị trường
              </div>
            </div>

            {/* Subtext */}
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
              Cao hơn mức 172.000
              <br />
              doanh nghiệp rút lui
            </p>
          </div>

        </div>

        {/* Horizontal Separator Space */}
        <div className="my-6 border-b border-blue-200/60 dark:border-blue-900/40" />

        {/* BOTTOM ROW: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* CARD 4: EXPORT/IMPORT TRADE */}
          <div className="bg-white/90 dark:bg-slate-800/80 p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col items-center text-center">
            {/* Illustration */}
            <div className="mb-2">
              <TradeIllustration isHovered={true} />
            </div>

            {/* Metric Banner Pill */}
            <div className="w-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 rounded-2xl py-3 px-5 mb-3 shadow-inner">
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                Tổng kim ngạch xuất nhập khẩu đạt
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-700 dark:text-blue-400 tracking-tight mt-1 leading-none">
                <AnimatedCounter value={888} formattedText="888 tỷ USD" triggerKey={replayKey} />
              </div>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-snug">
              {tradeItem.subtext}
            </p>
          </div>

          {/* Dotted Vertical Divider between Card 4 & Card 5 */}
          <div className="hidden md:block absolute left-[50%] top-4 bottom-4 w-px border-r-2 border-dashed border-sky-400/60 dark:border-sky-500/40 pointer-events-none" />

          {/* CARD 5: INFRASTRUCTURE */}
          <div className="bg-white/90 dark:bg-slate-800/80 p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col items-center text-center">
            {/* Illustration */}
            <div className="mb-2">
              <InfrastructureIllustration isHovered={true} />
            </div>

            {/* Metric Banner Pill */}
            <div className="w-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 rounded-2xl py-3 px-5 mb-3 shadow-inner">
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                Hoàn thành thêm
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-700 dark:text-blue-400 tracking-tight mt-1 leading-none">
                <AnimatedCounter value={395} formattedText="395km cao tốc" triggerKey={replayKey} />
              </div>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-snug">
              Khai thác toàn tuyến Bắc - Nam;
              <br />
              khởi công 5 tuyến đường sắt đô thị
            </p>
          </div>

        </div>

      </div>

      {/* FOOTER SOURCE CONTAINER */}
      <div className="mt-5 p-4 sm:p-5 bg-slate-100/90 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
        <p className="text-xs sm:text-sm italic font-medium text-slate-700 dark:text-slate-300 leading-relaxed text-center sm:text-left">
          {sourceFooter}
        </p>
      </div>

    </div>
  );
};
