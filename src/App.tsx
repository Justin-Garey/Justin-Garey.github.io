import ShowcaseCategory from "./Components/Showcase";
import webpage from "./webpage.json";
import React from "react";

export default function App() {
  const [config, setConfig] = React.useState<any>(null);

  React.useEffect(() => {
    setConfig(webpage.homepage);
  }, []);

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-stone-900 py-4 px-3 min-h-screen flex flex-col text-white">
      <div className="w-1/2 mx-auto flex-grow">
        <div className="p-3">
          <h1 className="text-4xl">{config.title}</h1>
          <h2 className="text-3xl text-stone-400">{config.subtitle}</h2>
        </div>
        {config.cards.map((card: any, index: number) => (
          <div key={index} className="p-3">
            <h1 className="text-4xl">{card.title}</h1>
            <p className="text-xl mt-3">
              <div style={{ whiteSpace: "pre-wrap" }}>{card.content}</div>
            </p>
          </div>
        ))}
        {config.skills.skills_list && config.skills.skills_list.length > 0 && (
          <div className="p-3">
            <h1 className="text-4xl mb-3">{config.skills.skills_title}</h1>
            <a href={`https://skillicons.dev`} target="_blank">
              <img
                src={`https://skillicons.dev/icons?i=${config.skills.skills_list.join(
                  ","
                )}`}
                alt={config.skills.skills_alt_text.join(", ")}
              />
            </a>
          </div>
        )}
        <div className="p-3">
          <ShowcaseCategory showcase_categories={config.showcase_categories} />
        </div>
      </div>
      <footer className="mt-auto border-t border-stone-700 pt-4 flex justify-between items-center w-full">
        <div className="text-stone-400">{config.footer.content}</div>
        <div className="flex space-x-4">
          {config.footer.links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white"
            >
              {link.title}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
