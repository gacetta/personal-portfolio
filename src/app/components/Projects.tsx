import { Flex } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      h={"100vh"}
      bg={"darkseagreen"}
      id="projects"
    >
      <SectionHeader>projects:</SectionHeader>
    </Flex>
  );
};
