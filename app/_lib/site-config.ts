import siteConfigData from "../../public/config/webpage.json";

export async function getSiteConfig() {
  return siteConfigData?.homepage ?? null;
}
