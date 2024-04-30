"use client";
import { cn } from "../helpers/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import Card from "./Card";

export const HomePage = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div className="lg:p-10 p-2">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-2/3 pb-4">
              <div
                className={cn(
                  "relative h-[200px] rounded-3xl font-bold flex items-center bg-white dark:bg-transparent pl-10 group",
                  containerClassName
                )}
                onMouseMove={handleMouseMove}
              >
                <div className="absolute inset-0 pointer-events-none" />
                <motion.div
                  className="pointer-events-none rounded-3xl bg-dot-thick-orange-500 dark:bg-square-thick-orange-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    WebkitMaskImage: useMotionTemplate`
                      radial-gradient(
                        200px circle at ${mouseX}px ${mouseY}px,
                        black 0%,
                        transparent 100%
                      )
                    `,
                    maskImage: useMotionTemplate`
                      radial-gradient(
                        200px circle at ${mouseX}px ${mouseY}px,
                        black 0%,
                        transparent 100%
                      )
                    `,
                  }}
                />
                <div className={cn("relative lg:text-[60px] text-[34px]", className)}>
                  {children}
                </div>
              </div>
              <div className="pl-4">
                <div className="relative pl-6 lg:pt-10 lg:text-[20px] text-[17px] text-[#e8e9eb] w-full">
                  Build with Limitless Data on{" "}
                  <span className="font-semibold">ao</span>. Simple, powerful and
                  flexible site generation framework with everything you love from
                  Next.js
                </div>
                <div className="flex justify-start pt-8 pl-6 gap-4">
                  <button className="flex text-center p-2 font-bold rounded-xl bg-orange-400">
                    Get Started
                  </button>
                  <button className="flex text-center p-2 font-bold rounded-xl bg-transparent border border-orange-400 text-orange-400">
                    Builders' Kit
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[100px] lg:h-[400px] lg:w-1/3 border-2 border-orange-400 flex justify-center items-center">
              Image
            </div>
          </div>
          <div className="h-[1px] bg-white/30 mt-10"></div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10">
        <section className="pt-4 justify-center items-center grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card, key) => {
            return (
              <Card
                key={key}
                title={card.title}
                imag={card.imag}
                text={card.text}
                link={card.link}
                last={key + 1 === cards.length}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 font-bold text-white  px-1 rounded-lg bg-gradient-to-r from-[#ffa600c2] to-orange-600`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

const cards = [
  {
    title: "Developer",
    imag: "developer.svg",
    text: "Understand the capabilities of 0rbit ",
    link: "/developer",
  },
  {
    title: "Learn by Building",
    imag: "build.svg",
    text: "Guides to build different processes with 0rbit",
    link: "/learn-by-building",
  },
  {
    title: "Protocol",
    imag: "protocol.svg",
    text: "Learn about 0rbit in deep",
    link: "/protocol",
  },
  {
    title: "Concepts",
    imag: "concept.svg",
    text: "Understand the basic concepts of ao",
    link: "/concepts/what-is-arweave",
  },
  {
    title: "Node Operators",
    imag: "node.svg",
    text: "Be a part of the 0rbit Network",
    link: "/node-operators",
  },
  {
    title: "Explore All",
    imag: "node.svg",
    text: "Be a part of the 0rbit Network",
    link: "/concepts/what-is-arweave",
  },
];

// import React from "react";

// const HomePage = () => {
//   return (
//     <main className={`w-full lg:py-10`}>
//       <div className="flex justify-center">
//         <div className="flex flex-row gap-4 items-center w-full pb-8">
//           <div className="flex flex-col gap-4 justify-center w-full">
//             <div className="flex flex-col gap-3">
//               <div className="sm:text-[32px] text-[20px] font-bold leading-[36px] tracking-wider">
//                 Welcome to <span className="text-orange-400">0rbit's</span>{" "}
//                 Documentation
//               </div>
//             </div>
{
  /* <div className="pt-4">
<h3 className="bg-[#392515] p-3 border text-md border-orange-400 rounded-lg text-orange-300">
    <span className="text-lg">💡 </span> This is the official Documentation
    for the First Ever Oracle on Arweave
  </h3>
  </div>
  <div className="pt-2">
          Discover the world of 0rbit with our comprehensive suite of
          resources!
        </div>
        <div className="pt-2">
          Build with Limitless Data on <code>ao.</code> Bring any data in
          your <code>ao</code> process using simple HTTP Get and Post
          Requests.🚀
        </div> */
}

//           </div>
//         </div>
//       </div>

//       <div className="h-[1px] bg-orange-400/30 mt-10"></div>

//     </main>
//   );
// };

// export default HomePage;
