"use client";

import { Box } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

// No rgba() chakra support, so a hacky solution for now
export const TransparentNavBarBg = () => {
  return (
    <Box
      bg={"white"}
      px={4}
      pr={8}
      position={"fixed"}
      w={"100vw"}
      top={0}
      left={0}
      zIndex={25}
      opacity={0.4}
      height={"4rem"}
    >
      <NavBar />
    </Box>
  );
};
