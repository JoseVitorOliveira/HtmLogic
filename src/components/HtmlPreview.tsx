interface HTMLPreviewProps {
  htmlPreview: string;
}

const HTMLPreview = ({ htmlPreview }: HTMLPreviewProps) => {
  return (
    <div className="bg-[#e0e0e]">
      <div
        className="text-black"
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      ></div>
    </div>
  );
};

export default HTMLPreview;
