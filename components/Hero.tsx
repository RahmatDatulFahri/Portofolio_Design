
import React from 'react';
import { HeadingXL, BodyText } from './Typography';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-4 mb-24 md:mb-64">
      <div className="col-span-12 mb-8 md:mb-16">
        <HeadingXL>
          DESIGN<br />
          <span className="text-red-600">AS</span> ORDER.
        </HeadingXL>
      </div>
      
      <div className="col-span-12 md:col-start-4 md:col-span-8">
        <BodyText className="text-lg sm:text-xl md:text-2xl font-light">
          {PERSONAL_INFO.bio}
        </BodyText>
      </div>
    </section>
  );
};
