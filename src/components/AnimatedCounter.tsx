import React, { useEffect, useState } from 'react';

interface Props {
  value: number;
  formattedText: string;
  duration?: number;
  triggerKey?: number | string;
  className?: string;
}

export const AnimatedCounter: React.FC<Props> = ({
  value,
  formattedText,
  duration = 1800,
  triggerKey,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    let startTimestamp: number | null = null;

    const hasComma = formattedText.includes(',');
    const isThousands = formattedText.includes('.') || value >= 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = value * easedProgress;

      if (hasComma) {
        const decimals = formattedText.split(',')[1]?.replace(/[^0-9]/g, '').length || 1;
        const formattedNum = currentNumber.toFixed(decimals).replace('.', ',');
        
        if (formattedText.toLowerCase().startsWith('gần ')) {
          setDisplayValue(`gần ${formattedNum} tỷ USD`);
        } else if (formattedText.includes('%')) {
          setDisplayValue(`${formattedNum}%`);
        } else {
          setDisplayValue(formattedText.replace(/[0-9]+,[0-9]+/, formattedNum));
        }
      } else if (isThousands) {
        const intVal = Math.round(currentNumber);
        const formattedNum = intVal.toLocaleString('vi-VN');
        if (formattedText.startsWith('Gần ')) {
          setDisplayValue(`Gần ${formattedNum}`);
        } else {
          setDisplayValue(formattedNum);
        }
      } else {
        const intVal = Math.round(currentNumber);
        if (formattedText.includes('tỷ USD')) {
          setDisplayValue(`${intVal} tỷ USD`);
        } else if (formattedText.includes('km')) {
          setDisplayValue(`${intVal}km`);
        } else {
          setDisplayValue(formattedText.replace(/[0-9]+/, intVal.toString()));
        }
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(formattedText);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [value, formattedText, duration, triggerKey]);

  return <span className={className}>{displayValue}</span>;
};
