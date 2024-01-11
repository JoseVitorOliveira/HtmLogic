interface HTMLPreviewProps {
  htmlPreview: string;
  containerTitle: string;
}

const HTMLPreview = ({ htmlPreview, containerTitle }: HTMLPreviewProps) => {
  return (
    <div className="bg-gray-700 w-full h-[32px] rounded">
      <div>
        <h1 className="text-center title_font text-2xl text-gray-100 mb-4">
          {containerTitle}
        </h1>
      </div>
      <div className="bg-[#D9D9D9] border border-white rounded-sm h-[250px] w-[250px] flex justify-center shadow- items-center">
        <div dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
      </div>
    </div>
  );
};

export default HTMLPreview;
