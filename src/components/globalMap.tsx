import React from "react";
import Image from "next/image";

const GlobalMap = () => {
  return (
    <div className="global-map">
      <Image
        src="/globalinfra.png"
        alt="Global infrastructure map"
        fill
        sizes="(max-width: 1280px) 100vw, 34vw"
        className="global-map__image"
      />
    </div>
  );
};

export default GlobalMap;
