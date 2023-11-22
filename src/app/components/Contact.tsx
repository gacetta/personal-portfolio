"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { ContactInfo } from "./ContactInfo";

export const Contact = () => {
  return (
    <Flex
      w={"100%"}
      h={"max-content"}
      bg={"cornflowerblue"}
      id="contact"
      position={"relative"}
      zIndex={-10}
      p={5}
      direction={"column"}
      align={"center"}
    >
      {/* <Image
        boxSize={"80%"}
        objectFit={"contain"}
        src={"/assets/images/airmail_envelope_nobg.png"}
        alt="airmail envelope background"
        opacity={0.4}
        position={"absolute"}
        top={10}
        right={9}
      /> */}
      <SectionHeader>contact:</SectionHeader>
      <ContactInfo icon="email" data="michael.gacetta@gmail.com" />
      <ContactInfo icon="phone" data="360.791.1333" />
      <ContactInfo icon="linkedIn" data="@gacetta" />
      <ContactInfo icon="gitHub" data="@gacetta" />
      <ContactInfo icon="instagram" data="@gacetta" />
    </Flex>
  );
};
