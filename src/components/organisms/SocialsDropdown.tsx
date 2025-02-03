import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu } from "radix-ui";
import { DropdownItem } from "../molecules/dropdownItem";

export const SocialsDropdown = () => {
  const socials = [
    {
      name: "Github",
      icon: <GitHubLogoIcon />,
      href: "https://github.com/lopesmarcello",
    },
    {
      name: "Linkedin",
      icon: <LinkedInLogoIcon />,
      href: "https://www.linkedin.com/in/mlopes30/",
    },
  ] as const;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Developer socials"
          className="flex size-[35px] items-center justify-center rounded-full bg-white text-slate-900  outline-none"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="min-w-[120px] rounded-md bg-slate-50 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
        >
          {socials.map((social) => (
            <DropdownItem key={social.href}>
              <a
                target="_blank"
                className="flex items-center justify-center gap-2"
                href={social.href}
              >
                {social.icon} {social.name}
              </a>
            </DropdownItem>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
