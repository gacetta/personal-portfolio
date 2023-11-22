import { Flex } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { ProjectItem } from "./ProjectItem";

const javascript = {
  name: "JavaScript",
  icon: "javascript-icon-info",
};
const react = {
  name: "React",
  icon: "react-icon-info",
};

const typescript = {
  name: "typescript",
  icon: "typescript-icon-info",
};

const project1 = {
  title: "Rise Theatre",
  img: "/assets/images/project1-0.png",
  link: "https://www.risetheatre.org/",
  description:
    "A searchable online directory of theatre and film professionals with 2500+ active, registered users",
  tech: [javascript, typescript, react],
};
const project2 = {
  title: "GraphQL One Stop Shop",
  img: "/assets/images/project2.png",
  link: "https://www.graphql-oss.io/",
  description:
    "A comprehensive GraphQL development tool that integrates editor-based request testing with live and dynamic visualization",
  tech: [javascript, react],
};

const projectList = [project1, project2, project1];

export const Projects = () => {
  return (
    <Flex direction={"column"} w={"100%"} bg={"darkseagreen"} id="projects">
      <SectionHeader>projects:</SectionHeader>
      {/* <ProjectItem data={project1} />
      <ProjectItem data={project2} /> */}
      {projectList.map((project) => {
        return <ProjectItem data={project} key={`project_${project.title}`} />;
      })}
    </Flex>
  );
};
