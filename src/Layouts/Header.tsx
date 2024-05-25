import SocialLinks, { SocialLinksProps } from "../Components/SocialLinks";
import { Section } from "../entities/data";

export type HeaderProps = {
  showSocialAccounts?: boolean;
  links: SocialLinksProps["links"];
  sections: Section[];
};

export default function Header(props: HeaderProps) {
  const { showSocialAccounts = false, sections, links } = props;

  return (
    <header className="flex justify-between w-full shadow-sm bg-white/15 backdrop-blur-sm px-6 fixed z-10">
      <nav className="flex items-center gap-4">
        {sections.map((s) => (
          <a
            className="inline text-xl text-[#5abeb4] hover:bg-sky-200  p-2"
            href={`#${s.id}`}
            key={s.id}
          >
            {s.title}
          </a>
        ))}
      </nav>
      <SocialLinks
        className={`${showSocialAccounts ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        defaultColor="#83c5be"
        links={links}
        size={36}
      />
    </header>
  );
}
