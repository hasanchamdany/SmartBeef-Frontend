import React from "react";
import Image from "next/image";

const HistoryCard = (e) => {
  return (
    <>
      <div className="flex justify-between px-8 bg-[#FAFAFA] shadow-xl rounded-lg my-2">
        <div>
          <Image
          className="rounded-lg"
          src={e.url}
          alt="gambar scan"
          width={200}
          height={200}
          />
        </div>
        <div>
        <div className="block text-black">Prediction = {e.pred}</div>
        <div className="block text-black">Email = {e.email}</div>
        <div className="block text-black">Date = {e.date}</div>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
