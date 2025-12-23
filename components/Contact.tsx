
import React from 'react';
import { HeadingXL, MetaText } from './Typography';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 md:py-48 text-center md:text-left">
      <div className="mb-12">
        <MetaText className="mb-8">INQUIRIES & COLLABORATIONS</MetaText>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="block group"
        >
          <HeadingXL className="hover:text-red-600 transition-colors cursor-pointer break-all">
            {PERSONAL_INFO.email.split('@')[0]}<br />
            <span className="text-gray-400 group-hover:text-red-300 transition-colors">@</span><br />
            {PERSONAL_INFO.email.split('@')[1]}
          </HeadingXL>
        </a>
      </div>
      
      <div className="grid grid-cols-12 gap-4 mt-32">
        <div className="col-span-12 md:col-span-3">
          <MetaText className="mb-4">SOCIAL</MetaText>
          <div className="space-y-2">
            <a href="#" className="block font-medium hover:text-red-600 transition-colors">READ.CV</a>
            <a href="#" className="block font-medium hover:text-red-600 transition-colors">BUREAU.CASE</a>
            <a href="#" className="block font-medium hover:text-red-600 transition-colors">ARE.NA</a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <MetaText className="mb-4">TIMEZONE</MetaText>
          <p className="font-medium">GMT+1 (ZURICH)</p>
          <p className="text-gray-500 uppercase text-xs tracking-widest mt-1">AVAILABLE FOR NEW PROJECTS</p>
        </div>
      </div>
    </div>
  );
};
