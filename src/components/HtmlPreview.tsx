interface HTMLPreviewProps {
  htmlPreview: string;
}

const HTMLPreview = ({ htmlPreview }: HTMLPreviewProps) => {
  return (
    <div className="">
      <div className="" dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
    </div>
  );
};

export default HTMLPreview;
