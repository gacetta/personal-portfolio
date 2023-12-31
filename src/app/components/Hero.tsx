import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box w={"100%"} h={"100vh"} position={"relative"} zIndex={-10} id="hero">
      <Image
        boxSize={"100%"}
        objectFit={"cover"}
        objectPosition={"50% 25%"}
        src={"/assets/images/headshot-lemur.jpg"}
        alt="Michael Gacetta"
        opacity={0.6}
      />
      <Flex
        w={"100%"}
        h={"100vh"}
        direction={"column"}
        align={"flex-start"}
        justify={"flex-end"}
        position={"absolute"}
        top={0}
      >
        <Box m={4} p={4}>
          <Text fontSize={"6xl"} textTransform={"uppercase"}>
            I Am
          </Text>
          <Text
            fontSize={"6xl"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
          >
            a software developer
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
