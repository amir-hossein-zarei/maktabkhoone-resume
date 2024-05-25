export interface Data {
  title: string;
  subtitle: string;
  links: Link[];
  sections: Section[];
}

export interface Link {
  color: string;
  name: string;
  url: string;
}

export interface SectionBase {
  id: string;
  title: string;
  color: string;
  type: SectionType;
  items: unknown[];
}

export interface ParagraphSection extends SectionBase {
  type: SectionType.Paragraph;
  items: ParagraphItem[];
}

export type ParagraphItem = string;

export interface CardSection extends SectionBase {
  type: SectionType.Card;
  items: CardItem[];
}

export interface CardItem {
  image: string;
  title: string;
  rate: number;
}

export type Section = ParagraphSection | CardSection;

enum SectionType {
  Paragraph = "paragraph",
  Card = "card",
}
