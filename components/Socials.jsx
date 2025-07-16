import Link from "next/link";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoWhatsapp,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoWhatsapp />,
    path: "https://wa.me/+972546400965",
  },
  { icon: <BiLogoInstagramAlt />, path: "https://www.instagram.com/sofieez" },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/sofia-khiznyak",
  },
  { icon: <BiLogoGithub />, path: "https://github.com/SofiaKhizhnyak" },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            target="_blank"
            key={index}
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
