// app/components/AboutContent.tsx

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Your personal biography written in Markdown
const markdownContent = `
# About Kshitij Srivastava 

// Experience & Philosophy

I am a Software Development Engineer with xxx. My focus is on writing clean, testable code that scales gracefully.

---

## Technical Expertise

| Area | Tools/Languages |
| :--- | :--- |
| **Backend** | TypeScript, Node.js, Go, Python |
| **Databases** | PostgreSQL, Redis, DynamoDB |
| **Cloud/DevOps** | AWS, Docker, Kubernetes, Terraform |
| **Research** | PyTorch, LaTeX, Distributed ML |

---

## The Research Link

My work on XXX taught me how to approach complex, unsolved problems with rigor. This academic discipline directly informs my engineering: I treat production bugs like research problems—isolation, hypothesis, testing, and validation.

`;

const AboutContent = () => {
  return (
    <div className="p-8 h-full overflow-y-auto bg-[#1e1e1e] font-sans text-gray-300">
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          className="text-lg leading-relaxed"
          // Custom renderers to ensure IDE styling on markdown elements
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl text-blue-400 font-bold mb-4 mt-8 border-b border-gray-700 pb-2" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl text-yellow-400 font-semibold mt-6 mb-3" {...props} />,
            p: ({node, ...props}) => <p className="mb-4" {...props} />,
            code: ({node, inline, ...props}) => {
                if (inline) {
                    return <code className="bg-[#333] text-red-300 px-1 py-0.5 rounded text-sm" {...props} />;
                }
                return <code className="bg-[#252526] p-3 block rounded-md text-sm text-red-300 overflow-x-auto" {...props} />;
            },
            a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
            li: ({node, ...props}) => <li className="text-gray-300 list-disc ml-6" {...props} />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default AboutContent;