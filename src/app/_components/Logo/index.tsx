import React, { FunctionComponent } from "react";
import ImageContainer from "../ImageContainer";

interface ILogo {
  className?: string;
}

const Logo: FunctionComponent<ILogo> = () => {
  return (
    <ImageContainer
      src={"/images/carter-mixers-logo-full.png"}
      alt="Carter Mixers "
      className="object-cover cursor-pointer"
    />
  );
};

export default Logo;
