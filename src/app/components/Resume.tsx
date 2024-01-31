import { Flex, Text } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { ResumeSection } from "./ResumeSection";
import { ResumeItem } from "./ResumeItem";
import * as resume from "../data/resumeData";

export const Resume = () => {
  return (
    <Flex direction={"column"} w={"100%"} bg={"#faa006"} id="resume" p={10}>
      <SectionHeader>resume:</SectionHeader>
      <ResumeSection title="education">
        <ResumeItem data={resume.codesmith}></ResumeItem>
        <ResumeItem data={resume.universityOfWashington}></ResumeItem>
        <ResumeItem data={resume.universityOfMichigan}></ResumeItem>
      </ResumeSection>
      <ResumeSection title="experience">
        <ResumeItem data={resume.riseTheatre}></ResumeItem>
        <ResumeItem data={resume.graphQLOneStopShop}></ResumeItem>
        <ResumeItem data={resume.broadway}></ResumeItem>
      </ResumeSection>
    </Flex>
  );
};
