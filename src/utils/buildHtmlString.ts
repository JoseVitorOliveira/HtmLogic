function buildHtmlString(correctOrder: string[]): string {
  return correctOrder.map((line) => `<div>${line}</div>`).join("");
}

export default buildHtmlString;
