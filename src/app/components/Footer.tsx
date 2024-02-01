"use client";

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { animateScroll } from "react-scroll";

export const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Flex
      h={"8vh"}
      w={"100%"}
      bg={"plum"}
      align={"center"}
      justify={"center"}
      position="absolute"
      bottom={0}
      left={0}
    >
      <Box
        cursor={"pointer"}
        px={1}
        py={1}
        m={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        onClick={scrollToTop}
      >
        <ArrowUpIcon boxSize={10} />
      </Box>
    </Flex>
  );
};
