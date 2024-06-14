import React from "react";
import { cn } from "../helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowLongRight } from "react-icons/hi2";

interface CardProps {
  title: string;
  imag: string;
  text: string;
  link: string;
  last: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  imag,
  text,
  link,
  last,
  onClick,
}) => {
  return (
    <Link href={link} className="" onClick={onClick}>
      <div
        className={cn(
          "p-6 rounded-lg border border-white/30 w-[400px] bg-[#151515] text-white/80 h-[200px] flex flex-col gap-4 hover:scale-105 hover:bg-black/20 transition-transform duration-300 ease-in-out"
        )}
      >
        <div className="flex justify-between flex-col h-full">
          <div className="">
            <div className="flex items-center gap-5">
              <div className="bg-gradient-to-b p-1 from-[#fcad26] via-[#ff7f00] to-[#ff5f00] rounded-[13px] justify-center items-center">
                <Image
                  src={`/images/cardsPage/${imag}`}
                  alt={"landing-card"}
                  width={32}
                  height={32}
                  className="object-contain opacity-80"
                />
              </div>
              <div className="text-xl font-medium text-rgb-2">{title}</div>
            </div>
            <div className="text-white/60 pt-3">{text}</div>
          </div>
          <div>
            <div className="p-2 border border-white/30 w-10 h-10 flex justify-center items-center rounded-lg">
              <HiMiniArrowLongRight className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(Card);
