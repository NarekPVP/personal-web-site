import getCookie from "@/utils/getCookie";

export default function useCurrentLangCode() {
  return getCookie("NEXT_LOCALE");
}
