function buildHtmlString(correctOrder: string[]): string {
  if (correctOrder.some((line) => line.includes("radio"))) {
    return correctOrder.map((line) => `${line}`).join("");
  }
  return correctOrder.map((line) => `<div>${line}</div>`).join("");
}

export default buildHtmlString;
