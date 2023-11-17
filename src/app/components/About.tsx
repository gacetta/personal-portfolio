import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Technology } from "./Technology";
import { Just_Another_Hand } from "next/font/google";

export const About = () => {
  return (
    <Flex
      w={"100%"}
      bg={"peru"}
      direction={"column"}
      justify={"center"}
      id="about"
      p={10}
    >
      <Text
        fontSize={"4xl"}
        textTransform={"uppercase"}
        m={4}
        textAlign={"center"}
      >
        about me:
      </Text>
      <Flex justify={"space-around"} m={4}>
        <Box maxW={"45%"}>
          <Image
            boxSize={"100%"}
            rounded={"full"}
            objectFit={"cover"}
            src={"/assets/images/headshot-dock-square.jpg"}
            alt="Michael Gacetta"
          />
        </Box>
        <Flex direction="column" flexGrow={1} maxWidth={"45%"}>
          <Text fontSize={"2xl"}>Hello World!</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus
            ultrices in iaculis nunc sed augue lacus. Vestibulum lorem sed risus
            ultricies tristique nulla. ultrices in iaculis nunc sed augue lacus.
            Vestibulum lorem sed risus ultricies tristique nulla.
          </Text>
        </Flex>
      </Flex>
      <Box>
        <Text textAlign={"center"} fontSize={"3xl"}>
          Current Technologies:
        </Text>
        <Flex align={"center"} justify={"center"} wrap={"wrap"}>
          <Technology
            title="JavaScript"
            href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          />
          <Technology
            title="TypeScript"
            href={"https://www.typescriptlang.org/"}
          />
          <Technology title="React.JS" href={"https://react.dev/"} />
          <Technology title="Node.js" href={"https://nodejs.org/en/"} />
          <Technology title="Express.js" href={"https://expressjs.com/"} />
        </Flex>
      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={"3xl"}>
          Other Technologies:
        </Text>
        <Flex align={"center"} justify={"center"} wrap={"wrap"}>
          <Technology
            title="JavaScript"
            href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          />
          <Technology
            title="TypeScript"
            href={"https://www.typescriptlang.org/"}
          />
          <Technology title="React.JS" href={"https://react.dev/"} />
          <Technology title="Node.js" href={"https://nodejs.org/en/"} />
          <Technology title="Express.js" href={"https://expressjs.com/"} />
          <Technology
            title="TypeScript"
            href={"https://www.typescriptlang.org/"}
          />
          <Technology title="React.JS" href={"https://react.dev/"} />
          <Technology title="Node.js" href={"https://nodejs.org/en/"} />
          <Technology title="Express.js" href={"https://expressjs.com/"} />
        </Flex>
      </Box>
    </Flex>
  );
};
