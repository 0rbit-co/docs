import React from "react";
import Card from "./Card";

const HomePage = () => {
  return (
    <main
      className={`mainHome flex flex-col items-center justify-start z-20 rounded-md py-3 text-center`}
    >
      <div className="flex flex-row gap-3 pt-6 items-center justify-center">
        {/* <Image src="/images/logo/Or.png" alt="logo" height={45} width={45} /> */}
        <h1 className="sm:text-[36px] text-[30px] font-[Rale-Regular] leading-[36px] tracking-widest">
          Build with Limitless Data
        </h1>
      </div>
      <h3 className="sm:text-[18px] text-[15px] font-[Light] tracking-wide">
        Documentation for first ever Oracle on Arweave
      </h3>
      <section className="sm:grid sm:grid-cols-2 sm:gap-6 gap-3 py-9 items-center place-items-center justify-center">
        {cards.map((card, key) => {
          return (
            <Card
              title={card.title}
              imag={card.imag}
              text={card.text}
              link={card.link}
              last={key + 1 == cards.length ? true : false}
            />
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;

const cards = [
  {
    title: "Developer",
    imag: "developer.png",
    text: "Understand the capabilities of 0rbit ",
    link: "/developer",
  },
  {
    title: "Learn by Building",
    imag: "build.png",
    text: "Guides to build different processes with 0rbit",
    link: "/learn-by-building",
  },
  {
    title: "Protocol",
    imag: "protocol.png",
    text: "Learn about 0rbit in deep",
    link: "/protocol",
  },
  {
    title: "Concepts",
    imag: "concept.png",
    text: "Understand the basic concepts of ao",
    link: "/concepts/what-is-arweave",
  },
  {
    title: "Node Operators",
    imag: "node.png",
    text: "Be a part of the 0rbit Network",
    link: "/node-operators",
  },
];
