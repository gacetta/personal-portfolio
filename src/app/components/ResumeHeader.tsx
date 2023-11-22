import { Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
}

export const ResumeHeader = (props: Props) => {
  return (
    <Text
      fontSize={"3xl"}
      textTransform={"capitalize"}
      fontWeight={"600"}
      m={4}
    >
      {props.children}
    </Text>
  );
};
