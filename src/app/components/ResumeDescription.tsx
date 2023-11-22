import { Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
}

export const ResumeDescription = (props: Props) => {
  return (
    <Text fontSize={"xl"} fontWeight={"400"} m={4}>
      {props.children}
    </Text>
  );
};
