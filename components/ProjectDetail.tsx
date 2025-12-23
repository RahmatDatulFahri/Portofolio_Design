
import React, { useEffect } from 'react';
import { Project } from '../types';
import { HeadingLG, MetaText, BodyText } from './Typography';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-2"
          >
            <span className="text-red-600">←</span>
            <MetaText className="text-black group-hover:text-red-600 transition-colors">BACK TO OVERVIEW</MetaText>
          </button>
        </div>

        <div className="col-span-12 md:col-span-8 mb-16 md:mb-0">
          <HeadingLG className="text-7xl md:text-9xl mb-8">{project.title}</HeadingLG>
          <BodyText>{project.description}</BodyText>
        </div>

        <div className="col-span-12 md:col-span-4 space-y-12">
          <div>
            <MetaText className="mb-4">PROJECT ROLE</MetaText>
            <p className="font-medium text-lg uppercase tracking-tight">{project.role}</p>
          </div>
          <div>
            <MetaText className="mb-4">CLIENT / CATEGORY</MetaText>
            <p className="font-medium text-lg uppercase tracking-tight">{project.category}</p>
          </div>
          <div>
            <MetaText className="mb-4">TOOLS / TECHNOLOGY</MetaText>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="border border-black px-3 py-1 text-[10px] uppercase tracking-widest">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <MetaText className="mb-4">RELEASE YEAR</MetaText>
            <p className="font-medium text-lg uppercase tracking-tight">{project.year}</p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 aspect-square bg-gray-100">
             <img src={`https://picsum.photos/seed/${project.id}1/800/800`} alt="detail" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-6 aspect-square bg-gray-100">
             <img src={`https://picsum.photos/seed/${project.id}2/800/800`} alt="detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
