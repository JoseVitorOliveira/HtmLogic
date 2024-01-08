interface HTMLPreviewProps {
  htmlPreview: string;
}

const HTMLPreview = ({ htmlPreview }: HTMLPreviewProps) => {
  return (
    <div className="flex justify-center items-center">
      <div dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
    </div>
  );
};

export default HTMLPreview;
