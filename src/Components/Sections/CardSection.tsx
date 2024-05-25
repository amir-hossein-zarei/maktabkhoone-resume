import { CardSection as CardSectionType } from "../../entities/data";
import StarRating from "../StarRating";

export type CardSectionProps = {
  section: CardSectionType;
};

export default function CardSection(props: CardSectionProps) {
  const { section } = props;
  return (
    <section className="h-screen p-16" id={section.id} key={section.id}>
      <h3
        className="font-medium text-3xl my-4"
        style={{ color: section.color }}
      >
        {section.title}
      </h3>
      <div className="flex flex-wrap m-12">
        {section.items.map((item, i) => (
          <div
            className=" hover:-translate-y-4 transition-transform shadow-md border rounded-xl mx-6 my-3 p-2 w-56"
            key={item.title + i}
          >
            <img
              className="w-full mb-6 max-h-40"
              alt={`${item.title} icon`}
              src={item.image}
            />
            <p className="text-xl my-4">{item.title}</p>
            <StarRating rate={item.rate} />
          </div>
        ))}
      </div>
    </section>
  );
}
