import { Flex, Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  years?: string;
  title: string;
}

export const ResumeSubHeader = (props: Props) => {
  return (
    <>
      <Flex justify={props.years ? "space-between" : "flex-start"}>
        <Text
          fontSize={"2xl"}
          textTransform={"capitalize"}
          fontWeight={"500"}
          m={4}
        >
          {props.title}
        </Text>
        <Text fontSize={"2xl"} fontWeight={"500"} m={4}>
          {props.years}
        </Text>
      </Flex>
      {props.children}
    </>
  );
};
