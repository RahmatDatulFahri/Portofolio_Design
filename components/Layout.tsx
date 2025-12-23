
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
    <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-12 py-6 md:py-12 max-w-[1920px] mx-auto">
      {/* Navigation */}
      <nav className="mb-16 md:mb-32">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 items-start">
          {/* Brand */}
          <div className="w-full md:col-span-3">
            <button onClick={() => setView('home')} className="text-left group block w-full">
              <MetaText className="text-black group-hover:text-red-600 transition-colors">
                {PERSONAL_INFO.name}
              </MetaText>
              <MetaText>{PERSONAL_INFO.title}</MetaText>
            </button>
          </div>
          
          {/* Location */}
          <div className="hidden md:block md:col-span-5">
            <MetaText className="opacity-60">{PERSONAL_INFO.location}</MetaText>
          </div>

          {/* Nav Links */}
          <div className="w-full md:col-span-4 flex justify-between md:justify-end md:space-x-8 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
            {(['home', 'about', 'contact'] as View[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="text-left group"
              >
                <MetaText className={`${currentView === v ? 'text-red-600' : 'text-black group-hover:text-red-600'} transition-colors px-2 md:px-0`}>
                  {v}
                </MetaText>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-32 md:mt-64 border-t border-gray-200 pt-8 pb-8">
        <div className="sm:col-span-12 md:col-span-3">
          <MetaText>© 2024 ALL RIGHTS RESERVED</MetaText>
        </div>
        <div className="hidden sm:block sm:col-span-6 md:col-span-5">
          <MetaText>BUILT WITH PRECISION</MetaText>
        </div>
        <div className="sm:col-span-12 md:col-span-4 flex md:justify-end">
          <MetaText>INDONESIA — PADANG</MetaText>
        </div>
      </footer>
    </div>
  );
};
