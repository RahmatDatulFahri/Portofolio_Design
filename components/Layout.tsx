
import React from 'react';
import { View } from '../types';
import { PERSONAL_INFO } from '../constants';
import { MetaText } from './Typography';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  return (
    <div className="min-h-screen flex flex-col px-6 md:px-12 py-8 md:py-12">
      {/* Navigation */}
      <nav className="grid grid-cols-12 gap-4 items-start mb-24 md:mb-32">
        <div className="col-span-6 md:col-span-3">
          <button onClick={() => setView('home')} className="text-left group">
            <MetaText className="text-black group-hover:text-red-600 transition-colors">
              {PERSONAL_INFO.name}
            </MetaText>
            <MetaText>{PERSONAL_INFO.title}</MetaText>
          </button>
        </div>
        
        <div className="hidden md:block col-span-5">
          <MetaText>{PERSONAL_INFO.location}</MetaText>
        </div>

        <div className="col-span-6 md:col-span-4 flex justify-end space-x-8">
          {(['home', 'about', 'contact'] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="text-left group"
            >
              <MetaText className={`${currentView === v ? 'text-red-600' : 'text-black group-hover:text-red-600'} transition-colors`}>
                {v}
              </MetaText>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="grid grid-cols-12 gap-4 mt-32 md:mt-64 border-t border-gray-200 pt-8">
        <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
          <MetaText>© 2024 ALL RIGHTS RESERVED</MetaText>
        </div>
        <div className="col-span-6 md:col-span-5">
          <MetaText>BUILT WITH PRECISION</MetaText>
        </div>
        <div className="col-span-6 md:col-span-4 flex justify-end">
          <MetaText>ZURICH — LONDON</MetaText>
        </div>
      </footer>
    </div>
  );
};
