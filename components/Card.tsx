import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  imag: string;
  text: string;
  link: string;
  last: boolean;
}

const Card: React.FC<CardProps> = ({ title, imag, text, link, last }) => {
  return (
    <Link
      href={link}
      className={`flex flex-col items-center justify-center gap-3 sm:p-4 p-2 hover:scale-105 text-center border-[1px] rounded-2xl bg-[#25291C] border-[#EB8F44]
      shadow-[inset_-6.14px_-6.14px_9px_0px_#1a202c] hover:shadow-[inset_6.14px_6.14px_9px_6px_#1a202c,inset_-6.14px_-6.14px_9px_6px_#1A202C]
      w-[100%] h-[120px] sm:my-0 my-3
      ${last ? "sm:col-span-2 sm:w-[50%]" : ""}`}
    >
      <div className="flex flex-row gap-3 items-center justify-center">
        <Image
          src={`/images/cardsPage/${imag}`}
          alt="navigation icon"
          height={30}
          width={30}
          className="sm:h-[30px] sm:w-[30px] w-[30px] h-[30px]"
        />
        <h1 className="sm:text-[24px] text-[21px] font-[Rale-Regular] leading-[24px] sm:tracking-widest tracking-wide">
          {title}
        </h1>
      </div>
      <h6 className="font-light text-[12px] font-[Thin]">{text}</h6>
    </Link>
  );
};

export default Card;
