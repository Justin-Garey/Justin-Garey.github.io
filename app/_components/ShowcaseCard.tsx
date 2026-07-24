import Link from "next/link";

export default function ShowcaseCategory({ category }: { category: any }) {
  return (
    <div className="mb-6 flex flex-wrap gap-6 justify-center">
      {category.items.map((item: any, index: number) => {
        const imageUrl = item.image_url;
        const hasValidImage = imageUrl && imageUrl.trim() !== "";
        const href = item.link ? item.link : "#";
        const isInternal = typeof href === "string" && href.startsWith("/");
        const cardBody = (
          <div className="p-6 bg-cover bg-center bg-quaternary text-off-white rounded-lg h-full hover:bg-quaternary/95" style={hasValidImage ? { backgroundImage: `url(${imageUrl})` } : undefined}>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            {item.date && (
              <h3 className="text-sm text-off-white/70 mb-2">
                {new Date(`${item.date}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </h3>
            )}
            <div className="mb-2">
              <div>{item.description}</div>
            </div>
          </div>
        );

        if (isInternal) {
          return (
            <Link key={index} href={href} className="showcase-card">
              {cardBody}
            </Link>
          );
        }

        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-card"
          >
            {cardBody}
          </a>
        );
      })}
    </div>
  );
}