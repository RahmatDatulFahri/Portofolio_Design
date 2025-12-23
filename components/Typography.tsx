
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const HeadingXL: React.FC<Props> = ({ children, className = '' }) => (
  <h1 className={`text-[12vw] font-black uppercase leading-swiss tracking-tighter ${className}`}>
    {children}
  </h1>
);

export const HeadingLG: React.FC<Props> = ({ children, className = '' }) => (
  <h2 className={`text-4xl md:text-6xl font-bold uppercase leading-none tracking-tighter ${className}`}>
    {children}
  </h2>
);

export const MetaText: React.FC<Props> = ({ children, className = '' }) => (
  <span className={`text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] text-gray-500 block ${className}`}>
    {children}
  </span>
);

export const BodyText: React.FC<Props> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${className}`}>
    {children}
  </p>
);
