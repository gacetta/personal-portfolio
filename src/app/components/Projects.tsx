"use client";

import { Flex } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { ProjectItem } from "./ProjectItem";
import { allTechnologies as TECH } from "../constants/technologies";

const project1 = {
  title: "Rise Theatre",
  img: "/assets/images/project1-0.png",
  link: "https://www.risetheatre.org/",
  description:
    "A searchable online directory of theatre and film professionals with 2500+ active, registered users",
  tech: [
    TECH.GRAPHQL,
    TECH.JAVASCRIPT,
    TECH.MONGODB,
    TECH.REACT,
    TECH.TYPESCRIPT,
  ],
};
const project2 = {
  title: "GraphQL One Stop Shop",
  img: "/assets/images/project2.png",
  link: "https://www.graphql-oss.io/",
  description:
    "A comprehensive GraphQL development tool that integrates editor-based request testing with live and dynamic visualization",
  tech: [TECH.JAVASCRIPT, TECH.REACT, TECH.GRAPHQL, TECH.SASS],
};

const projectList = [project1, project2];

export const Projects = () => {
  return (
    <Flex direction={"column"} w={"100%"} bg={"darkseagreen"} id="projects">
      <SectionHeader>projects:</SectionHeader>
      {projectList.map((project, index) => {
        return <ProjectItem data={project} key={`${project.title}_${index}`} />;
      })}
    </Flex>
  );
};
