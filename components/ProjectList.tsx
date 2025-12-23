
import React from 'react';
import { PROJECTS } from '../constants';
import { HeadingLG, MetaText } from './Typography';
import { Project } from '../types';

interface ProjectListProps {
  onSelect: (p: Project) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ onSelect }) => {
  return (
    <section>
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 border-b-2 border-black pb-4">
          <MetaText className="text-black">SELECTED WORKS / 01 — 04</MetaText>
        </div>
      </div>

      <div className="space-y-32 md:space-y-64">
        {PROJECTS.map((project, index) => (
          <article 
            key={project.id} 
            className="grid grid-cols-12 gap-4 group cursor-pointer"
            onClick={() => onSelect(project)}
          >
            {/* Metadata column */}
            <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
              <div className="sticky top-12">
                <MetaText className="text-black mb-2">{project.id}</MetaText>
                <MetaText className="mb-4">{project.year}</MetaText>
                <MetaText className="text-red-600">{project.category}</MetaText>
              </div>
            </div>

            {/* Title & Image column */}
            <div className="col-span-12 md:col-span-9">
              <div className="mb-12 overflow-hidden bg-gray-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-9 gap-4">
                <div className="col-span-9 md:col-span-6">
                  <HeadingLG className="group-hover:text-red-600 transition-colors">
                    {project.title}
                  </HeadingLG>
                </div>
                <div className="col-span-9 md:col-span-3 flex md:justify-end items-end">
                  <MetaText className="text-black underline underline-offset-4">VIEW CASE STUDY</MetaText>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
