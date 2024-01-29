"use client";
import { InfoIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link, Text, Image } from "@chakra-ui/react";
import { Technology } from "../constants/technologies";

interface Props {
  children?: React.ReactNode;
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
        href={props.tech.HREF}
        isExternal={true}
        bg={"white"}
        rounded={"lg"}
        p={0.5}
        boxShadow={"lg"}
      >
        {props.tech.LOGO ? (
          <Image
            boxSize={"3rem"}
            rounded={"md"}
            objectFit={"contain"}
            src={props.tech.LOGO}
            alt={props.tech.NAME}
          />
        ) : (
          <IconButton
            boxSize={"3rem"}
            rounded={"md"}
            mx={".5rem"}
            colorScheme="gray"
            aria-label={props.tech.NAME}
            icon={<InfoIcon />}
          />
        )}
      </Link>
      <Text mt={0.5} fontSize={"l"}>
        {props.tech.NAME}
      </Text>
    </Flex>
  );
};
