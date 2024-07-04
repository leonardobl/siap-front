export function removeUnderscoreAndCapitalize(txt: string) {
  if (!txt) return "";

  const temp = txt
    .split("_")
    .map((t) => `${t.charAt(0).toUpperCase()}${t.slice(1).toLowerCase()}`)
    .join(" ");

  return temp;
}
