import { Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
}

export const SectionHeader = (props: Props) => {
  return (
    <Text
      fontSize={"4xl"}
      textTransform={"uppercase"}
      fontWeight={"700"}
      m={4}
      textAlign={"center"}
    >
      {props.children}
    </Text>
  );
};
