interface HTMLPreviewProps {
  htmlPreview: string;
}

const HTMLPreview = ({ htmlPreview }: HTMLPreviewProps) => {
  return (
    <div>
      <h1>HTML Preview</h1>
      <div
        className="html-preview"
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      ></div>
    </div>
  );
};

export default HTMLPreview;
