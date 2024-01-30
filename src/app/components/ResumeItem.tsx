"use client";

import { Box, Text, Flex } from "@chakra-ui/react";

interface resumeItem {
  title: string;
  position?: string;
  years?: string;
  description?: string;
  status?: string;
}

interface Props {
  children?: React.ReactNode;
  data: resumeItem;
}

export const ResumeItem = (props: Props) => {
  return (
    <Flex flexDir={"column"} m={4} bg={"salmon"} rounded={4} p={1}>
      <Flex justify={props.data.years ? "space-between" : "flex-start"}>
        <Text fontSize={"2xl"} textTransform={"capitalize"} fontWeight={"500"}>
          Title: {props.data.title}
        </Text>
        <Text fontSize={"2xl"} fontWeight={"500"}>
          {props.data.years}
        </Text>
      </Flex>
      <Text>position: {props.data.position}</Text>
      <Text>{props.data.status && `status: ${props.data.status}`}</Text>
      <Text>description: {props.data.description}</Text>
    </Flex>
  );
};
