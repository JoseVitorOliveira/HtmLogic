import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code({ code }: { code: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <code className="language-html w-full m-0 p-0">{code}</code>;
}
