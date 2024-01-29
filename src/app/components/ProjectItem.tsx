"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Technology } from "../constants/technologies";
import { TechnologyBadge } from "./TechnologyBadge";

interface ProjectItemData {
  title: string;
  img: string;
  link: string;
  description: string;
  tech: Technology[];
}

interface Props {
  children?: React.ReactNode;
  data: ProjectItemData;
}

export const ProjectItem = (props: Props) => {
  const data = props.data;
  return (
    <Box p={5} m={5} bg={"whitesmoke"} rounded={5}>
      <Text>Project Title: {data.title}</Text>
      <Text>Project Img: {data.img}</Text>
      <Text>Project Link: {data.link}</Text>
      <Text>Project Description: {data.description}</Text>
      <Flex>
        {data.tech.map((tech, index) => {
          return (
            <TechnologyBadge
              key={`${data.title}_${tech.NAME}_${index}`}
              tech={tech}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
