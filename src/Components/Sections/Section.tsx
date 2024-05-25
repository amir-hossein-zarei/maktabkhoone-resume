import { Section as SectionType } from "../../entities/data";
import CardSection from "./CardSection";
import ParagraphSection from "./ParagraphSection";

export type SectionProps = {
  section: SectionType;
};

export default function Section(props: SectionProps) {
  const { section } = props;
  if (section.type === "card") {
    return <CardSection section={section} />;
  }
  if (section.type === "paragraph") {
    return <ParagraphSection section={section} />;
  }
}
