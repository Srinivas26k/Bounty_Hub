import React, { useState } from "react";
import { docsSections } from "../data/docsSections";
import DocsSidebar from "../components/DocsSidebar";
import DocsSection from "../components/DocsSection"; // default import

const DocsPage: React.FC = () => {
  const [activeId, setActiveId] = useState(docsSections[0].id);
  const activeContent = docsSections.find(section => section.id === activeId)?.content;

  return (
    <div className="flex min-h-screen bg-black/40 backdrop-blur-md pt-12 pb-12 text-white">
      <DocsSidebar sections={docsSections} activeId={activeId} setActiveId={setActiveId} />
      <main className="flex-1 p-6 flex justify-center">
        <DocsSection content={activeContent} />
      </main>
    </div>
  );
};

export default DocsPage;
