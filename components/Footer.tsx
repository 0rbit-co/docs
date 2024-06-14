import React from "react";
import Image from "next/image";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const event = ({ action, category, label }) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#151515] border-t border-white/60 px-4 py-8 md:px-8">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="flex max-w-[1000px] flex-col md:flex-row items-center justify-between">
          <div className="flex-shrink-0">
            <div className="flex justify-center flex-col items-center lg:items-start">
              <Image
                src="/images/logo/lightLogo.svg"
                width={80}
                height={80}
                alt="logo"
              />
              <p className="text-white text-xs font-medium mt-2">
                The Decentralized Oracle Network
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <SocialLink href="https://twitter.com/0rbitco" label="Twitter">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://discord.gg/JVSjqaKJgV" label="Discord">
              <FaDiscord />
            </SocialLink>
            <SocialLink href="https://github.com/0rbit-co/" label="Github">
              <FaGithub />
            </SocialLink>
          </div>
        </div>
        <div className="text-center md:text-left text-white text-xs font-medium mt-6">
          <p>
            MIT {date.getFullYear()} ©{" "}
            <a
              href="https://0rbit.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              0rbit
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, children, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        event({
          action: "click_social_link",
          category: "Footer",
          label,
        })
      }
      className="text-white text-xl mr-2 transition duration-300 ease-in-out transform hover:scale-110"
    >
      {children}
    </a>
  );
};

export default Footer;
