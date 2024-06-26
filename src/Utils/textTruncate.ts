export function textFileTruncate({
  text,
  limit,
}: {
  text: string;
  limit: number;
}) {
  if (!text) return;

  const textSlice = text.split(".");
  const extention = textSlice[textSlice.length - 1];

  if (text.length > limit) {
    return `${textSlice[0].slice(0, limit)}...${extention}`;
  }
  return text;
}
