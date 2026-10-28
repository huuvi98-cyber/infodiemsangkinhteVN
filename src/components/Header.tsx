import React, { useState } from 'react';
import { RefreshCw, Volume2, VolumeX, Code, LayoutGrid, Eye, Sparkles, Sun, Moon } from 'lucide-react';
import { ViewMode, ThemeMode } from '../types';

interface Props {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  onReplay: () => void;
  onOpenEmbed: () => void;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
}

export const Header: React.FC<Props> = ({
  viewMode,
  setViewMode,
  themeMode,
  setThemeMode,
  onReplay,
  onOpenEmbed,
  isSpeaking,
  onToggleSpeech
}) => {
  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 py-3.5 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Zone 1: Brand & Tagline */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight whitespace-nowrap">
              Box Đồ Họa Động
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
              Kinh tế Việt Nam 9 tháng 2026
            </p>
          </div>
        </div>

        {/* Zone 2: Navigation / View Mode Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
          <button
            onClick={() => setViewMode('classic')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'classic'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Khung Báo Bìa</span>
          </button>
          
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Thẻ Lưới</span>
          </button>
          
          <button
            onClick={() => setViewMode('slideshow')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              viewMode === 'slideshow'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trình Chiếu</span>
          </button>
        </div>

        {/* Zone 3: Interactive Controls & Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Replay Animations Button */}
          <button
            onClick={onReplay}
            title="Phát lại hiệu ứng số liệu"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">Phát lại</span>
          </button>

          {/* Voice Text-to-Speech Button */}
          <button
            onClick={onToggleSpeech}
            title={isSpeaking ? 'Dừng đọc' : 'Đọc tóm tắt bằng giọng nói'}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              isSpeaking
                ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                : 'text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
            }`}
          >
            {isSpeaking ? (
              <VolumeX className="w-3.5 h-3.5 animate-bounce text-rose-600 dark:text-rose-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            )}
            <span className="hidden sm:inline">{isSpeaking ? 'Dừng đọc' : 'Đọc tin'}</span>
          </button>

          {/* Dark / Light Theme Toggle */}
          <button
            onClick={() => setThemeMode(themeMode === 'dark-slate' ? 'classic-blue' : 'dark-slate')}
            title="Đổi giao diện Sáng / Tối"
            className="p-1.5 text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
          >
            {themeMode === 'dark-slate' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Embed / Export Code Button */}
          <button
            onClick={onOpenEmbed}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm shadow-blue-700/30 transition-all whitespace-nowrap shrink-0"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Mã Nhúng / Tải về</span>
          </button>
        </div>

      </div>
    </header>
  );
};
