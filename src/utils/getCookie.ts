export default function getCookie(key: string) {
  const regex = new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*=\\s*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, "$1");
}
