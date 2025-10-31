import '../App.css';

export default function ShowcaseCategory({ category }: { category: any }) {
  return (
    <div className="mb-6 flex flex-wrap gap-6 justify-center">
      {category.items.map((item: any, index: number) => (
        <a key={index} href={item.link ? item.link : "#"} target="_blank" className="card-width">
          <div className="p-6 bg-cover bg-center bg-eerie-black rounded-lg" style={{ backgroundImage: `url(${item.image_url})` }}>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="mb-2">
              <div>{item.description}</div>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}