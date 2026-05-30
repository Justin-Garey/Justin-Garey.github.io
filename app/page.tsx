import Main from "./_pages/Main";
import { getSiteConfig } from "./_lib/site-config";

export default async function HomePage() {
  const config = await getSiteConfig();

  if (!config) {
    throw new Error("No homepage configuration was found in remote config");
  }

  return <Main config={config} />;
}
