import { useRef, useState } from "react";

const Iframe = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [code, setCode] = useState<string>("");

  const runCode = () => {
    if (textAreaRef.current) {
      setCode(textAreaRef.current.value);
    }
  };

  return (
    <div>
      <div>
        <textarea ref={textAreaRef}></textarea>
        <button onClick={runCode}>Run</button>
      </div>
      <iframe
        src={"data:text/html," + encodeURIComponent(code)}
        title="html-sandbox"
      />
    </div>
  );
};

export default Iframe;
