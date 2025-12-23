
import React from 'react';
import { HeadingXL, BodyText } from './Typography';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-4 mb-32 md:mb-64">
      <div className="col-span-12 mb-12">
        <HeadingXL>
          DESIGN<br />
          <span className="text-red-600">AS</span> ORDER.
        </HeadingXL>
      </div>
      
      <div className="col-span-12 md:col-start-4 md:col-span-8">
        <BodyText>
          {PERSONAL_INFO.bio}
        </BodyText>
      </div>
    </section>
  );
};
