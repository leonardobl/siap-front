export default function objectToParams(params: any): string {
  const result = params
    ? Object.entries(params)
        .map((e) => e.join("="))
        .join("&")
    : "";

  return result;
}
