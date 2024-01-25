import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code({ code }: { code: string }) {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <code ref={codeRef} className="language-html w-full m-0 p-0">
      {code}
    </code>
  );
}
