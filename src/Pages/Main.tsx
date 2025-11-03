import ShowcaseCategory from "../Components/Showcase";
import webpage from "../webpage.json";
import React from "react";
import '../App.css';
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

export default function Main() {
  const [config, setConfig] = React.useState<any>(null);

  React.useEffect(() => {
    setConfig(webpage.homepage);
  }, []);

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black-olive py-4 px-3 min-h-screen flex flex-col text-white">
      <div className="page-width mx-auto flex-grow">
        <div className="p-3">
          <h1 className="text-4xl">{config.title}</h1>
          <h2 className="text-3xl text-stone-400">{config.subtitle}</h2>
        </div>
        <div className="flex justify-center mb-6">
          <Carousel carouselItems={config.carousel} />
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
      <Footer />
    </div>
  );
}
