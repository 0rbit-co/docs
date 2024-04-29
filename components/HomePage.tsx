import React from "react";
import Card from "./Card";

const HomePage = () => {
  return (
    <main className={`mainHome w-full lg:w-[600px] xl:w-[800px] lg:py-10`}>
      <div className="flex flex-col gap-4 justify-center">
        <div className="sm:text-[36px] text-[30px] font-bold leading-[36px] tracking-wider">
          Welcome to 0rbit's Documentation
        </div>
        <h3 className="bg-[#392515] p-3 border text-md border-orange-400 rounded-lg text-orange-300">
          <span className="text-lg">💡 </span> This is the official
          Documentation for the First Ever Oracle on Arweave
        </h3>
        <div className="pt-2">
            Discover the world of 0rbit with our comprehensive suite of
            resources! Dive into developer insights, learn-by-building guides,
            explore protocols, grasp core concepts, and join our vibrant
            community of node operators. 🚀
          </div>
      </div>
      <section className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
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
];
