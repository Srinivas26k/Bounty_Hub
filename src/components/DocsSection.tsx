const DocsSection = ({ content }: { content?: React.ReactNode }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {content ? content : <p className="text-gray-400">No content available.</p>}
    </div>
  );
};

export default DocsSection;
