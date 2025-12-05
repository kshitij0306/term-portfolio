"use client";

import { useState } from "react";
import { explorerItems, fileSystem } from "../data/fileSystem";
import { FolderOpen, Search, GitGraph, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function IdeLayout() {
  const [activeFile, setActiveFile] = useState("home.tsx");

  return (
    <div className="flex h-screen w-full bg-[#1e1e1e] text-[#cccccc] overflow-hidden">
      
      {/* 1. Activity Bar (Far Left Icons) */}
      <div className="w-12 border-r border-[#2b2b2b] flex flex-col items-center py-4 space-y-6 bg-[#181818]">
        <FolderOpen className="w-6 h-6 text-white cursor-pointer opacity-100" />
        <Search className="w-6 h-6 text-gray-500 cursor-pointer hover:text-white transition" />
        <GitGraph className="w-6 h-6 text-gray-500 cursor-pointer hover:text-white transition" />
        <div className="flex-1" /> {/* Spacer */}
        <Settings className="w-6 h-6 text-gray-500 cursor-pointer hover:text-white transition" />
      </div>

      {/* 2. Explorer Sidebar */}
      <div className="w-60 bg-[#181818] border-r border-[#2b2b2b] flex flex-col">
        <div className="p-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Explorer</div>
        
        {/* Project Name */}
        <div className="px-2 py-1 text-sm font-bold text-blue-400 flex items-center">
           YOUR_NAME_PORTFOLIO
        </div>

        {/* File List */}
        <div className="flex flex-col mt-1">
          {explorerItems.map((fileName) => {
            const file = fileSystem[fileName];
            return (
              <button
                key={fileName}
                onClick={() => setActiveFile(fileName)}
                className={`flex items-center gap-2 px-4 py-1 text-sm cursor-pointer hover:bg-[#2a2d2e] transition-colors ${
                  activeFile === fileName ? "bg-[#37373d] text-white" : "text-gray-400"
                }`}
              >
                {file.icon}
                <span>{file.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Editor Area */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        
        {/* Tab Bar */}
        <div className="h-9 flex bg-[#181818] border-b border-[#2b2b2b]">
            {/* Logic for multiple tabs will go here, for now just the active one */}
            <div className="flex items-center gap-2 px-3 bg-[#1e1e1e] border-t-2 border-blue-500 text-sm min-w-[120px] text-white">
                {fileSystem[activeFile].icon}
                {activeFile}
            </div>
        </div>

        {/* Content/Code Area */}
        <motion.div
            key={activeFile}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 p-8 overflow-auto font-mono"
        >
            {/* Render the specific file content */}
            {fileSystem[activeFile].content}
        </motion.div>
        
        {/* Status Bar */}
        <div className="h-6 bg-[#007acc] text-white flex items-center px-4 text-xs justify-between">
            <div className="flex gap-4">
                <span>main*</span>
                <span>0 errors, 0 warnings</span>
            </div>
            <div className="flex gap-4">
                <span>Ln 12, Col 42</span>
                <span>UTF-8</span>
                <span>Prettier</span>
            </div>
        </div>
      </div>
    </div>
  );
}