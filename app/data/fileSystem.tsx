import { FileCode, FileJson, FileText, User, ScrollText, Terminal } from "lucide-react";
import AboutContent from "../components/AboutContent"; 
import ProjectsContent from "../components/ProjectsContent";
import React from "react";

export interface VirtualFile {
  name: string;
  icon: React.ReactNode;
  language: string;
  content: React.ReactNode;
}

export const fileSystem: Record<string, VirtualFile> = {
  "home.tsx": {
    name: "home.tsx",
    icon: <FileCode className="w-4 h-4 text-blue-400" />,
    language: "typescript",
    content: <div className="p-4"><h1>Welcome to my Interactive Portfolio</h1></div>, // Placeholder
  },
  "research.json": {
    name: "research.json",
    icon: <FileJson className="w-4 h-4 text-green-400" />,
    language: "json",
    content: <div className="p-4">Research Papers List...</div>,
  },
  "about.md": { // <--- NEW ENTRY
    name: "about.md",
    icon: <FileText className="w-4 h-4 text-yellow-400" />,
    language: "markdown",
    content: <AboutContent />,
  },
  "projects.sh": { // <--- NEW ENTRY
    name: "projects.sh",
    icon: <Terminal className="w-4 h-4 text-purple-400" />,
    language: "shell",
    content: <ProjectsContent />,
  },
};

export const explorerItems = Object.keys(fileSystem);