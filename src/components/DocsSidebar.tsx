import React from "react";

type SidebarProps = {
  sections: { id: string; title: string }[];
  activeId: string;
  setActiveId: (id: string) => void;
};

const DocsSidebar: React.FC<SidebarProps> = ({ sections, activeId, setActiveId }) => (
  <nav className="w-64 border-r border-blue-900 hidden md:block bg-blue-900/40 backdrop-blur-md text-white">
    <h1 className="text-2xl font-bold px-6 py-4 border-b border-blue-800">Documentation</h1>
    <ul>
      {sections.map(({ id, title }) => (
        <li key={id}>
          <button
            className={`block w-full text-left px-6 py-3 hover:bg-blue-700/80 ${
              activeId === id
                ? "bg-blue-800/80 font-semibold"
                : ""
            }`}
            onClick={() => setActiveId(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default DocsSidebar;
