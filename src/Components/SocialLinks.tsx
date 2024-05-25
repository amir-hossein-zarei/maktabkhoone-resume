import { PropsWithoutRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SocialIcon } from "react-social-icons";
import { Link } from "../entities/data";

export type SocialLinksProps = PropsWithoutRef<{
  onVisibilityChange?: (visible: boolean) => void;
  className?: string;
  defaultColor?: string;
  links: Link[];
  size?: number;
}>;

export default function SocialLinks(props: SocialLinksProps) {
  const { size, links, className, defaultColor, onVisibilityChange } = props;

  const [ref, inView] = useInView();

  useEffect(() => onVisibilityChange?.(inView), [inView, onVisibilityChange]);

  return (
    <div
      className={`flex gap-2 justify-center ${className ? className : ""}`}
      ref={ref}
    >
      {links.map((link) => (
        <div style={{ fill: link.color }} key={link.name}>
          <SocialIcon
            className="hover:!fill-inherit"
            bgColor="transparent"
            fgColor={defaultColor ? "inherit" : link.color}
            url={link.url}
            key={link.name}
            style={{
              fill: defaultColor,
              height: size,
              width: size,
            }}
          />
        </div>
      ))}
    </div>
  );
}
