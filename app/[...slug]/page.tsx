import MarkdownPage from "../_pages/MarkdownPage";
import WebGame from "../_pages/WebGame";
import { getSiteConfig } from "../_lib/site-config";
import { notFound } from "next/navigation";

interface RouteItem {
  link?: string;
  linkSrc?: string;
  title?: string;
}

interface Category {
  items?: RouteItem[];
}

function normalizePath(path: string) {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path;
}

function findRoute(pathname: string, categories: Category[] = []) {
  const items = categories.flatMap((category) => category.items ?? []);
  return items.find(
    (item) =>
      Boolean(item.link) &&
      Boolean(item.linkSrc) &&
      normalizePath(item.link as string) === pathname,
  );
}

function toSlugSegments(link: string) {
  return link
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean);
}

export async function generateStaticParams() {
  const config = await getSiteConfig();
  const categories = (config?.showcase_categories ?? []) as Category[];
  const items = categories.flatMap((category) => category.items ?? []);

  return items
    .filter((item) => {
      const link = typeof item.link === "string" ? item.link.trim() : "";
      const linkSrc = typeof item.linkSrc === "string" ? item.linkSrc.trim() : "";
      return Boolean(link) && link !== "undefined" && Boolean(linkSrc);
    })
    .map((item) => ({
      slug: toSlugSegments(normalizePath(item.link as string)),
    }))
    .filter((param) => param.slug.length > 0);
}

export const dynamicParams = false;

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathname = `/${slug.join("/")}`;
  const config = await getSiteConfig();

  if (!config) {
    throw new Error("No homepage configuration was found in remote config");
  }

  const route = findRoute(pathname, config.showcase_categories);

  if (!route?.linkSrc) {
    notFound();
  }

  if (route.linkSrc.endsWith(".md")) {
    return <MarkdownPage src={route.linkSrc} config={config} />;
  }

  return <WebGame src={route.linkSrc} title={route.title || ""} />;
}
