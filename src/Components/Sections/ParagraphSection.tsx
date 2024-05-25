import { ParagraphSection as ParagraphSectionType } from "../../entities/data";

export type ParagraphSectionProps = {
  section: ParagraphSectionType;
};

export default function ParagraphSection(props: ParagraphSectionProps) {
  const { section } = props;

  return (
    <section className="h-screen p-16" id={section.id} key={section.id}>
      <h3
        className="font-medium text-3xl my-4"
        style={{ color: section.color }}
      >
        {section.title}
      </h3>
      {section.items.map((item, i) => (
        <p className="text-2xl" key={i}>
          {item}
        </p>
      ))}
    </section>
  );
}
