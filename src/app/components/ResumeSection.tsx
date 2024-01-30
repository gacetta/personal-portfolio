import { Box, Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  title: string;
}

export const ResumeSection = (props: Props) => {
  return (
    <Box m={4}>
      <Text fontSize={"3xl"} textTransform={"uppercase"} fontWeight={"600"}>
        {props.title}
      </Text>
      {props.children}
    </Box>
  );
};
