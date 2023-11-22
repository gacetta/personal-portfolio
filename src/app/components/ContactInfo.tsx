import { Flex, Icon, Text } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  icon: string;
  data: string;
}

export const ContactInfo = (props: Props) => {
  return (
    <Flex direction={"row"} w={"30rem"}>
      <Text>Icon: {props.icon}</Text>
      <Text>data: {props.data}</Text>
    </Flex>
  );
};
