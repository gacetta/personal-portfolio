"use client";
import { InfoIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link, Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  title: string;
  href: string;
}

export const Technology = (props: Props) => {
  return (
    <Flex
      align={"center"}
      // justify={"center"}
      m={".5rem"}
      p={".5rem"}
      flex={"clamp(100%/6 + .1%, 10rem, 100%)"}
    >
      <Link href={props.href} isExternal={true}>
        <IconButton
          mx={".5rem"}
          colorScheme="gray"
          aria-label={props.title}
          icon={<InfoIcon />}
        />
      </Link>
      <Text fontSize={"xl"}>{props.title}</Text>
    </Flex>
  );
};
