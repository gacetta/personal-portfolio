"use client";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";

interface PageSectionProps {
  children?: React.ReactNode;
  title: string;
  bg?: string;
  fullHeight?: boolean;
  center?: boolean;
}

export const PageSection = (props: PageSectionProps) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      bg={props.bg}
      id={props.title}
      m="auto"
      alignItems={"center"}
      justifyContent={props.center ? "center" : "normal"}
      h={props.fullHeight ? "100vh" : "100%"}
      p={5}
      pt={20}
      position="relative"
    >
      <Text
        fontSize={"4xl"}
        textTransform={"uppercase"}
        fontWeight={"700"}
        textAlign={"center"}
        bg="transparent"
        position={props.center ? "absolute" : "initial"}
        top="6rem"
      >
        {props.title}
      </Text>
      <Flex direction={"column"} maxW={"1600px"} w="80%" p={10}>
        {props.children}
      </Flex>
    </Flex>
  );
};
