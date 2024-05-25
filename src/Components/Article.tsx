import { Data } from "../entities/data";
import SocialLinks from "./SocialLinks";

export type ArticleProps = {
  onVisibilityChange?: (visible: boolean) => void;
  data: Data;
};

export default function Article(props: ArticleProps) {
  const { data, onVisibilityChange } = props;

  return (
    <article className="h-screen flex flex-col flex-wrap justify-center content-center">
      <div className="relative bottom-12">
        <h1 className="font-extrabold text-5xl font-sans">{data.title}</h1>
        <h2 className="font-medium text-center text-xl font-mono">
          {data.subtitle}
        </h2>
        <SocialLinks
          size={48}
          links={data.links}
          onVisibilityChange={onVisibilityChange}
        />
      </div>
      <a
        className="absolute left-1/2 bottom-4 text-sky-600 text-4xl text-center animate-bounce"
        href={`#${data.sections[0].id}`}
      >
        ⌄
      </a>
    </article>
  );
}
