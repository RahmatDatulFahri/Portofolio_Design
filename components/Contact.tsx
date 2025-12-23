
import React from 'react';
import { HeadingXL, MetaText } from './Typography';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [user, domain] = PERSONAL_INFO.email.split('@');

  return (
    <div className="py-12 md:py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <MetaText className="mb-8">INQUIRIES & COLLABORATIONS</MetaText>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="block group"
        >
          <div className="text-[10vw] sm:text-[8vw] md:text-[10vw] font-black uppercase leading-[0.9] tracking-tighter break-all hover:text-red-600 transition-colors cursor-pointer">
            {user}<br />
            <span className="text-gray-300 group-hover:text-red-300 transition-colors">@</span><br />
            {domain}
          </div>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mt-24 md:mt-32 border-t border-gray-100 pt-12">
        <div className="md:col-span-3">
          <MetaText className="mb-4">SOCIAL CHANNELS</MetaText>
          <div className="space-y-3">
            <a href="#" className="block font-medium text-lg md:text-base hover:text-red-600 transition-colors uppercase tracking-tight">READ.CV</a>
            <a href="#" className="block font-medium text-lg md:text-base hover:text-red-600 transition-colors uppercase tracking-tight">BUREAU.CASE</a>
            <a href="#" className="block font-medium text-lg md:text-base hover:text-red-600 transition-colors uppercase tracking-tight">ARE.NA</a>
          </div>
        </div>
        <div className="md:col-span-4 md:col-start-5">
          <MetaText className="mb-4">TIMEZONE & AVAILABILITY</MetaText>
          <p className="font-medium text-lg md:text-base uppercase tracking-tight">GMT+7 (PADANG, ID)</p>
          <p className="text-gray-500 uppercase text-xs tracking-widest mt-2 bg-gray-50 inline-block px-2 py-1">AVAILABLE FOR NEW PROJECTS</p>
        </div>
      </div>
    </div>
  );
};
