import { Flex, Text } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSubHeader } from "./ResumeSubHeader";
import { ResumeDescription } from "./ResumeDescription";

export const Resume = () => {
  return (
    <Flex direction={"column"} w={"100%"} bg={"#faa006"} id="resume">
      <SectionHeader>resume:</SectionHeader>
      <ResumeHeader>
        education
        <ResumeSubHeader title="codesmith" years="2023"></ResumeSubHeader>
        <ResumeSubHeader title="university of washington" years="2021-2022">
          <ResumeDescription>Test</ResumeDescription>
        </ResumeSubHeader>
        <ResumeSubHeader
          title="university of michigan"
          years="2003-2007"
        ></ResumeSubHeader>
      </ResumeHeader>
    </Flex>
  );
};
