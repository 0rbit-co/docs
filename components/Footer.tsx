// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaDiscord } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";

// const Footer = () => {
//   const date = new Date();
//   return (
//     <footer
//       className="overflow-x-hidden w-full pt-8 pb-4 px-6 pr-20 border-t border-slate-700 bg-[#151515] relative z-20"
//       aria-labelledby="footer-heading"
//     >
//       <div className="flex justify-between">
//         <div>
//           <div className="flex-col-reverse flex justify-center md:flex-row md:w-full md:px-[6rem]">
//             <div className="w-full md:mt-0">
//               <Image
//                 src="../images/logo/lightLogo.svg"
//                 width={100}
//                 height={100}
//                 alt="logo"
//               />
//               <div className="text-white/60 md:text-sm font-medium md:max-w-[16.875rem] my-5">
//                 The Decentralized Oracle Network
//               </div>
//               <div className="flex items-center gap-3 text-[24px]">
//                 <a href="https://twitter.com/0rbitco">
//                   <FaSquareXTwitter />
//                 </a>
//                 <a href="https://discord.gg/tKHsEAUp9p">
//                   <FaDiscord />
//                 </a>
//                 <a href="https://github.com/0rbit-co/">
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="text-white/60 md:text-sm font-medium mt-7 md:px-[6rem]">
//             <span>
//               MIT {new Date().getFullYear()} ©{" "}
//               <a href="https://0rbit.co" target="_blank">
//                 0rbit
//               </a>
//               .
//             </span>{" "}
//           </div>
//         </div>
//         <div className="flex flex-col gap-4 items-start text-white/60">
//           <div className="font-semibold">Explore</div>
//           <div className="text-sm">Home</div>
//           <div className="text-sm">Blogs</div>
//         </div>
//         <div className="flex flex-col gap-4 items-start text-white/60">
//           <div className="font-semibold">Company</div>
//           <div className="text-sm">About Us</div>
//           <div className="text-sm">Terms and Conditions</div>
//           <div className="text-sm">Privacy Policy</div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Image from "next/image";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="">
      <div className="mx-auto bg-[#151515] border-t border-white/60 px-4 py-8 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
            <SocialLink href="https://twitter.com/0rbitco">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://discord.gg/tKHsEAUp9p">
              <FaDiscord />
            </SocialLink>
            <SocialLink href="https://github.com/0rbit-co/">
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

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-xl mr-2 transition duration-300 ease-in-out transform hover:scale-110"
    >
      {children}
    </a>
  );
};

export default Footer;
