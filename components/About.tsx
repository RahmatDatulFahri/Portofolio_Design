
import React from 'react';
import { HeadingLG, BodyText, MetaText } from './Typography';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 animate-in fade-in duration-700">
      <div className="col-span-12 md:col-span-8 mb-24 md:mb-0">
        <HeadingLG className="mb-8 md:mb-12 text-5xl md:text-7xl">
          THE RATIONAL<br />APPROACH
        </HeadingLG>
        <div className="space-y-8">
          <BodyText>
            Design is not decoration. Design is a structural system for the communication of ideas. 
            Following the Swiss legacy, I believe that visual clarity is achieved through the 
            mathematical distribution of elements on a grid.
          </BodyText>
          <BodyText>
            {PERSONAL_INFO.bio}
          </BodyText>
        </div>
      </div>

      <div className="col-span-12 md:col-start-9 md:col-span-4 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12 space-y-16">
        <div>
          <MetaText className="mb-6">SELECTED EXHIBITIONS</MetaText>
          <ul className="space-y-6">
            <li>
               <p className="font-bold text-lg uppercase tracking-tight">ZURICH DESIGN WEEK</p>
               <MetaText className="mt-1">2023 — KINETIC STUDY</MetaText>
            </li>
            <li>
               <p className="font-bold text-lg uppercase tracking-tight">TYPOGRAPHY NOW</p>
               <MetaText className="mt-1">2022 — BASEL, CH</MetaText>
            </li>
          </ul>
        </div>
        <div>
          <MetaText className="mb-6">PROFESSIONAL EXPERIENCE</MetaText>
          <ul className="space-y-6">
            <li>
               <p className="font-bold text-lg uppercase tracking-tight">STUDIO AKZIDENZ</p>
               <MetaText className="mt-1">2021-PRESENT — SR. DESIGNER</MetaText>
            </li>
            <li>
               <p className="font-bold text-lg uppercase tracking-tight">GRID DYNAMICS</p>
               <MetaText className="mt-1">2018-2021 — VISUAL LEAD</MetaText>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
