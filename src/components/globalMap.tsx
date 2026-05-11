import React from "react";
import Image from "next/image";

const GlobalMap = () => {
  return (
    <div className="panel-card">
      <Image
        src="/globalinfra.png"
        alt="Global infrastructure map"
        width={800}
        height={800}
        className="global-map__image"
      />
    </div>
  );
};

export default GlobalMap;
