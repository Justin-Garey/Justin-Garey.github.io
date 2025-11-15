import '../App.css';

export default function ShowcaseCategory({ category }: { category: any }) {
  return (
    <div className="mb-6 flex flex-wrap gap-6 justify-center">
      {category.items.map((item: any, index: number) => (
        <a key={index} href={item.link ? item.link : "#"} target={item.link && item.link.startsWith("/") ? "_self" : "_blank"} className="showcase-card">
          <div className="p-6 bg-cover bg-center bg-quaternary text-off-white rounded-lg h-full hover:bg-quaternary/95" style={{ backgroundImage: `url(${item.image_url})` }}>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <div className="mb-2">
              <div>{item.description}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}