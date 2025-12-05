// app/data/projects.ts

export interface Project {
  name: string;
  command: string; // The "shell command" to represent the project
  description: string;
  status: 'production' | 'experimental' | 'archived';
  link: string;
}

export const projectList: Project[] = [
  {
    name: 'DistributedCachingService',
    command: 'run.sh --deploy-region eu-west',
    description: 'A high-availability, consistent hashing cache layer using Redis and Go.',
    status: 'production',
    link: 'https://github.com/kshitij/cache-service',
  },
  {
    name: 'ResearchVisualization',
    command: 'python visualize.py --data-set CIFAR10',
    description: 'Interactive D3.js frontend for analyzing attention map heatmaps from my NeurIPS paper.',
    status: 'experimental',
    link: 'https://github.com/kshitij/viz-tool',
  },
  {
    name: 'PortfolioIDE',
    command: 'next dev --port 3000',
    description: 'This very website, built using Next.js, Tailwind, and Framer Motion.',
    status: 'production',
    link: 'https://github.com/kshitij/this-repo',
  },
];