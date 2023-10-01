import Image from "next/image";
import React from "react";

export default function OurCommitments() {
  return (
    <div className="my-20 flex justify-center gap-[15%] bg-primary-500 px-10 py-[60px]">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/cmmt1.svg"}
          alt=""
          width={100}
          height={90}
          className="h-20"
        />
        <span className="text-xl">Assured Quality</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/cmmt2.svg"}
          alt=""
          width={100}
          height={90}
          className="h-20"
        />
        <span className="text-xl">Secure Payment </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/cmmt3.svg"}
          alt=""
          width={100}
          height={90}
          className="h-20"
        />
        <span className="text-xl">Premium Package</span>
      </div>
    </div>
  );
}
