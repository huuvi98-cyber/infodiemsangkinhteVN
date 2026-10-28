import React, { useState } from 'react';
import { X, Copy, Check, Code, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EmbedModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copiedType, setCopiedType] = useState<'iframe' | 'script' | null>(null);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://example.com';
  
  const iframeSnippet = `<iframe src="${currentUrl}" width="100%" height="750" frameborder="0" style="border:0; overflow:hidden;" allowfullscreen></iframe>`;
  
  const scriptSnippet = `<div id="vn-econ-widget"></div>
<script src="${currentUrl}/widget.js" async></script>`;

  const handleCopy = (text: string, type: 'iframe' | 'script') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Lấy Mã Nhúng Box Đồ Họa
            </h3>
            <p className="text-xs text-slate-500">
              Nhúng widget đồ họa động 9 tháng 2026 vào trang web của bạn
            </p>
          </div>
        </div>

        {/* Option 1: iFrame Code */}
        <div className="space-y-2 mt-4">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span>Mã Nhúng iFrame</span>
            <button
              onClick={() => handleCopy(iframeSnippet, 'iframe')}
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-xs"
            >
              {copiedType === 'iframe' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Đã chép
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Sao chép
                </>
              )}
            </button>
          </label>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
            <code>{iframeSnippet}</code>
          </div>
        </div>

        {/* Option 2: Direct URL */}
        <div className="space-y-2 mt-4">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span>Đường dẫn trực tiếp (Direct Link)</span>
            <button
              onClick={() => handleCopy(currentUrl, 'script')}
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-xs"
            >
              {copiedType === 'script' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Đã chép
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Sao chép
                </>
              )}
            </button>
          </label>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 flex items-center justify-between">
            <code className="truncate">{currentUrl}</code>
            <a
              href={currentUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-slate-400 hover:text-white shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

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
