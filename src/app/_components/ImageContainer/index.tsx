import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface ILogo {
  src: string;
  alt: string;
  className?: string;
}

const ImageContainer: FunctionComponent<ILogo> = ({ src, alt, className }) => {
  return (
    <Container className={className} sx={{ position: "relative", height: "100%" }}>
      <Link href="/">
        <Image
          src={src}
          alt={alt}
          className="object-cover cursor-pointer"
          fill
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </Link>
    </Container>
  );
};

export default ImageContainer;
