import React from "react";
import ShowcaseCard from "./ShowcaseCard";

export default function ShowcaseCategory({
  showcase_categories,
}: {
  showcase_categories: any;
}) {
  const [selectedCategory, setSelectedCategory] = React.useState<any>(
    showcase_categories[0]
  );

  return (
    <>
      {showcase_categories && showcase_categories.length > 0 && (
        <div className="flex justify-center">
          <div className="border rounded-full border-stone-700 bg-stone-700 flex gap-3">
            {showcase_categories.map((category: any, idx: number) => {
              const selected = category.title === selectedCategory.title;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selected}
                  className={`text-2xl flex-1 text-center rounded-full py-3 px-6 ${selected ? "bg-stone-900" : ""}`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      )}
      {showcase_categories && showcase_categories.length > 0 && (
        <div className="mt-6">
          <ShowcaseCard category={selectedCategory} />
        </div>
      )}
    </>
  );
}
