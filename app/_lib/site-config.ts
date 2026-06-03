const CONFIG_URL =
  "https://justin-garey-public-storage.s3.us-east-2.amazonaws.com/Personal-Website-Configuration/webpage.json";

export async function getSiteConfig() {
  const response = await fetch(CONFIG_URL, {
    cache: "force-cache", next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch site config: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  return data?.homepage ?? null;
}
