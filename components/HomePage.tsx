"use client";
import { cn } from "../helpers/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const event = ({ action, category, label, value }: any) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

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

  const handleLinkClick = (label: string) => {
    event({
      action: "click_link",
      category: "HomePage",
      label,
    });
  };

  return (
    <div className="lg:p-10 lg:pb-0 p-2">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 pb-4">
              <div
                className={cn(
                  "relative h-[170px] rounded-3xl w-full font-bold flex items-center bg-white dark:bg-transparent pl-10 group",
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
                <div
                  className={cn(
                    "relative lg:text-[60px] text-[34px]",
                    className
                  )}
                >
                  {children}
                </div>
              </div>
              <div className="pl-4">
                <div className="relative pl-6 lg:pt-6 lg:text-[20px] text-[17px] text-[#e8e9eb] w-full">
                  Build with Limitless Data on{" "}
                  <span className="font-semibold">ao</span>.
                </div>
                <div className="flex justify-start pt-8 pl-6 gap-4">
                  <a
                    href="/developer"
                    className="flex text-center p-2 font-bold rounded-xl bg-orange-400"
                    onClick={() => handleLinkClick("Get Started")}
                  >
                    <button>Get Started</button>
                  </a>
                  <a
                    href="https://playground.0rbit.co/"
                    className="flex text-center p-2 font-bold rounded-xl bg-transparent border border-orange-400 text-orange-400"
                    target="_blank"
                    onClick={() => handleLinkClick("Playground")}
                  >
                    <button>Playground</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center pb-4">
              <Image
                src="/images/intro-diagram.svg"
                alt="image"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="h-[1px] bg-white/30 mt-10"></div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10">
        <section className="pt-4 justify-center items-center grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          {cards.map((card, key) => {
            return (
              <Card
                key={key}
                title={card.title}
                imag={card.imag}
                text={card.text}
                link={card.link}
                last={key + 1 === cards.length}
                onClick={() => handleLinkClick(card.title)}
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
