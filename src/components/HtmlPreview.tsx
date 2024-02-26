interface HTMLPreviewProps {
  htmlPreview: string;
  containerTitle: string;
}

const HTMLPreview = ({ htmlPreview, containerTitle }: HTMLPreviewProps) => {
  return (
    <div className="bg-gray-700 w-full h-[32px] rounded">
      <div>
        <h1 className="text-center title_font text-xl shadow-sm shadow-white w-full text-gray-100 mb-4">
          {containerTitle}
        </h1>
      </div>
      <div className="bg-[#D9D9D9] border border-white rounded-sm h-[250px] w-[250px] flex justify-center items-center">
        <div
          className="styles_preview flex flex-col justify-center items-center w-full h-full"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        ></div>
      </div>
    </div>
  );
};

export default HTMLPreview;
