import React from "react";
import webpage from "../webpage.json";

export default function Footer() {
  const [config, setConfig] = React.useState<any>(null);

  React.useEffect(() => {
    setConfig(webpage.homepage);
  }, []);

  if (!config) {
    return <></>
  }
    return (
        <footer className="mt-auto border-t border-secondary pt-4 flex justify-between items-center w-full">
        <div className="text-secondary">{config.footer.content}</div>
        <div className="flex space-x-4">
          {config.footer.links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary/80 underline"
            >
              {link.title}
            </a>
          ))}
        </div>
      </footer>
    );
}