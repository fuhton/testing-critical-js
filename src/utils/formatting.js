export const formatUrl = url =>
  url
    .replace("http://", "")
    .replace("https://", "")
    .replace(/\/$/, "");
