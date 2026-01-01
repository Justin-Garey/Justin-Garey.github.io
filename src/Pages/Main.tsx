import ShowcaseCategory from "../Components/Showcase";
import '../App.css';
import Footer from "../Components/Footer";
import { WebSite } from "schema-dts";
import { JsonLd } from "react-schemaorg";

export default function Main(props: { config: any }) {
  return (
    <>
      <meta name="description" content="I am a software engineer working professionally in web development, API development, AWS cloud, software defined networking, and open-source 5G R&D." />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <JsonLd<WebSite>
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": props.config.title,
          "alternateName": "Justin Garey Website",
          "description": "I am a software engineer working professionally in web development, API development, AWS cloud, software defined networking, and open-source 5G R&D.",
          "url": "https://justin-garey.dev"
        }}
      />
      <div className="bg-primary py-4 px-3 min-h-screen flex flex-col text-secondary">
        <div className="page-width mx-auto flex-grow">
          <div className="p-3">
            <h1 className="text-4xl">{props.config.title}</h1>
            <h2 className="text-3xl text-secondary/40">{props.config.subtitle}</h2>
          </div>
          {props.config.cards.map((card: any, index: number) => (
            <div key={index} className="p-3">
              <h1 className="text-4xl">{card.title}</h1>
              <div className="text-xl mt-3">
                <div style={{ whiteSpace: "pre-wrap" }}>{card.content}</div>
              </div>
            </div>
          ))}
          {props.config.skills.skills_list && props.config.skills.skills_list.length > 0 && (
            <div className="p-3">
              <h1 className="text-4xl mb-3">{props.config.skills.skills_title}</h1>
              <a href={`https://skillicons.dev`} target="_blank">
                <img
                  src={`https://skillicons.dev/icons?i=${props.config.skills.skills_list.join(
                    ","
                  )}`}
                  alt={props.config.skills.skills_alt_text.join(", ")}
                />
              </a>
            </div>
          )}
          <div className="p-3">
            <ShowcaseCategory showcase_categories={props.config.showcase_categories} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
