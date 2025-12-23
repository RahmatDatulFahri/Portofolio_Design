
import React from 'react';
import { HeadingLG, BodyText, MetaText } from './Typography';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8 mb-24">
        <HeadingLG className="mb-12">THE RATIONAL<br />APPROACH</HeadingLG>
        <BodyText className="mb-12">
          Design is not decoration. Design is a structural system for the communication of ideas. 
          Following the Swiss legacy, I believe that visual clarity is achieved through the 
          mathematical distribution of elements on a grid.
        </BodyText>
        <BodyText>
          {PERSONAL_INFO.bio}
        </BodyText>
      </div>

      <div className="col-span-12 md:col-start-9 md:col-span-4 border-l border-gray-200 pl-8 space-y-12">
        <div>
          <MetaText className="mb-4">EXHIBITIONS</MetaText>
          <ul className="space-y-4">
            <li>
               <p className="font-medium">ZURICH DESIGN WEEK</p>
               <MetaText>2023 — KINETIC STUDY</MetaText>
            </li>
            <li>
               <p className="font-medium">TYPOGRAPHY NOW</p>
               <MetaText>2022 — BASEL, CH</MetaText>
            </li>
          </ul>
        </div>
        <div>
          <MetaText className="mb-4">EXPERIENCE</MetaText>
          <ul className="space-y-4">
            <li>
               <p className="font-medium">STUDIO AKZIDENZ</p>
               <MetaText>2021-PRESENT — SR. DESIGNER</MetaText>
            </li>
            <li>
               <p className="font-medium">GRID DYNAMICS</p>
               <MetaText>2018-2021 — VISUAL LEAD</MetaText>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
