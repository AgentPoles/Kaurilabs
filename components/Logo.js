import { Image } from "@chakra-ui/image";
import { Link, AspectRatio } from "@chakra-ui/layout";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={"/assets/logo.png"}
        alt="Kauri"
        w="48px"
        objectFit="contain"
      />
    </Link>
  );
}

const BigKauriImage = () => (
  <Image
    src={"/assets/logo.png"}
    alt="Kauri"
    w="40%"
    maxW="150px"
    objectFit="contain"
  />
);

const MediumKauriImage = () => (
  <Image
    src={"/assets/logo.png"}
    alt="Kauri"
    w="30%"
    maxW={["80px", "80px", "100px"]}
    objectFit="contain"
  />
);

export { BigKauriImage, MediumKauriImage };
