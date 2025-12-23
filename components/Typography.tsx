
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const HeadingXL: React.FC<Props> = ({ children, className = '' }) => (
  <h1 className={`text-[14vw] sm:text-[13vw] md:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter break-words ${className}`}>
    {children}
  </h1>
);

export const HeadingLG: React.FC<Props> = ({ children, className = '' }) => (
  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight tracking-tighter ${className}`}>
    {children}
  </h2>
);

export const MetaText: React.FC<Props> = ({ children, className = '' }) => (
  <span className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 block ${className}`}>
    {children}
  </span>
);

export const BodyText: React.FC<Props> = ({ children, className = '' }) => (
  <p className={`text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl ${className}`}>
    {children}
  </p>
);
