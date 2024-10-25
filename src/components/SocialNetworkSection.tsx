import GithubIcon from "../icons/GitHub";
import GmailIcon from "../icons/Gmail";
import LinkedInIcon from "../icons/LinkedIn";
import { SocialPill } from "./SocialPill";

interface SocialNetwork {
  url: string;
  icon: JSX.Element;
  label: string;
}

const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    url: "https://www.linkedin.com/in/rober-guerrero/",
    icon: <LinkedInIcon className="size-6" />,
    label: "LinkedIn",
  },
  {
    url: "mailto:roberguerreromendoza@gmail.com",
    icon: <GmailIcon className="size-6" />,
    label: "Gmail",
  },
  {
    url: "https://github.com/skeytor",
    icon: <GithubIcon className="size-6" />,
    label: "GitHub",
  },
];

export const SocialNetworkSection = () => {
  return (
    <nav className="flex gap-x-4 mt-6">
      {SOCIAL_NETWORKS.map((socialNetwork) => (
        <SocialPill key={socialNetwork.url} url={socialNetwork.url}>
          {socialNetwork.icon} {socialNetwork.label}
        </SocialPill>
      ))}
    </nav>
  );
};
