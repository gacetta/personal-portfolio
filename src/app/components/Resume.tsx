import { Flex, Text } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { ResumeSection } from "./ResumeSection";
import { ResumeItem } from "./ResumeItem";

const codesmith = {
  title: "codesmith",
  position: "student",
  years: "2023",
  description: "software engineering residency",
};

const universityOfWashington = {
  title: "university of washington",
  position: "masters of architecture",
  years: "2021-2022",
  description: "masters student studying architecture",
  status: "incomplete",
};

const universityOfMichigan = {
  title: "university of michigan",
  position: "BFA in Jazz Studies (Artists and Scholars Program)",
  years: "2003-2007",
  description:
    "dual degree student in school of music and school of engineering (incomplete)",
  status: "GPA: 3.88",
};

const riseTheatre = {
  title: "rise theatre",
  position: "software engineering intern",
  years: "2023-2024",
  description:
    "a highly searchable online database of film & theatre professionals, with 2500+ active users",
};

const graphQLOneStopShop = {
  title: "graphQL one stop shop",
  position: "software engineer",
  years: "2023",
  description:
    "a comprehensive GraphQL development tool with integrated code editor and schema visualizer.",
};

const broadway = {
  title: "broadway musical theatre",
  position: "music director / conductor / arranger / pianist",
  years: "2008-2024",
  description:
    "A key member of the music department for 16 TONY nominated broadway shows ( detailed CV on request )",
};

export const Resume = () => {
  return (
    <Flex direction={"column"} w={"100%"} bg={"#faa006"} id="resume" p={10}>
      <SectionHeader>resume:</SectionHeader>
      <ResumeSection title="education">
        <ResumeItem data={codesmith}></ResumeItem>
        <ResumeItem data={universityOfWashington}></ResumeItem>
        <ResumeItem data={universityOfMichigan}></ResumeItem>
      </ResumeSection>
      <ResumeSection title="experience">
        <ResumeItem data={riseTheatre}></ResumeItem>
        <ResumeItem data={graphQLOneStopShop}></ResumeItem>
        <ResumeItem data={broadway}></ResumeItem>
      </ResumeSection>
    </Flex>
  );
};
