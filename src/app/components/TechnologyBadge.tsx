"use client";
import { InfoIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link, Text, Image } from "@chakra-ui/react";

export interface Technology {
  name: string;
  href?: string;
  logo?: string;
}

const javascript = {
  name: "JavaScript",
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  logo: "/assets/images/technologies/javascript.png",
};
const typescript = {
  name: "TypeScript",
  href: "https://www.typescriptlang.org/",
  logo: "/assets/images/technologies/typescript.png",
};

export const currentTechnologies = [javascript, typescript];
export const otherTechnologies = [];

interface Props {
  children?: React.ReactNode;
  // name: string;
  // href?: string;
  tech: Technology;
}

export const TechnologyBadge = (props: Props) => {
  return (
    <Flex
      align={"center"}
      // justify={"center"}
      direction={"column"}
      m={".5rem"}
      p={".5rem"}
      flex={"clamp(100%/6 + .1%, 10rem, 100%)"}
    >
      <Link
        href={props.tech.href}
        isExternal={true}
        bg={"white"}
        rounded={"lg"}
        p={0.5}
        boxShadow={"lg"}
      >
        {props.tech.logo ? (
          <Image
            boxSize={"3rem"}
            rounded={"md"}
            objectFit={"contain"}
            src={props.tech.logo}
            alt={props.tech.name}
          />
        ) : (
          <IconButton
            boxSize={"3rem"}
            rounded={"md"}
            mx={".5rem"}
            colorScheme="gray"
            aria-label={props.tech.name}
            icon={<InfoIcon />}
          />
        )}
      </Link>
      <Text fontSize={"xl"}>{props.tech.name}</Text>
    </Flex>
  );
};
