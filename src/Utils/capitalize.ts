export function Capitalize(txt: string) {
  if (!txt) return "";
  let value = txt.toLowerCase();
  value = txt.charAt(0).toUpperCase() + value.slice(1);

  return value;
}
