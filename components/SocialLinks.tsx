import { SocialLink } from "@/lib/types";

type SocialLinkProps = {
  links: SocialLink[];
};

function SocialLinks({ links }: SocialLinkProps) {
  return (
    <div>
      {links.map((link, index) => (
        <span key={link.platform} className="text-sm font-medium tracking-wide">
          {index > 0 && (
            <span className="text-neutral-500 mx-1 font-extralight"> / </span>
          )}
          <a href={link.url}>{link.platform}</a>
        </span>
      ))}
    </div>
  );
}

export default SocialLinks;
