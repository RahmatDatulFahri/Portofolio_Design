
export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  role: string;
  tools: string[];
  description: string;
  imageUrl: string;
}

export type View = 'home' | 'project' | 'about' | 'contact';
