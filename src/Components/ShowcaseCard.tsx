

export default function ShowcaseCategory({ category }: { category: any }) {
  return (
    <div className="">
      {category.items.map((item: any, index: number) => (
        <a key={index} href={item.link ? item.link : "#"} target="_blank" className="block mb-6 bg-stone-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <p className="mb-2">
            <div style={{ whiteSpace: "pre-wrap" }}>{item.description}</div>
          </p>
        </a>
      ))}
    </div>
  );
}