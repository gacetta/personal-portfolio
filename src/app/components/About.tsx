"use client";
import { Box, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { TechnologyBadge, Technology } from "./TechnologyBadge";
import { Just_Another_Hand } from "next/font/google";
import { SectionHeader } from "./SectionHeader";

// export interface Technology {
//   name: string;
//   href?: string;
//   logo?: string;
// }

const javascript = {
  name: "JavaScript",
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  logo: "/assets/images/technologies/javascript.png",
};
const typescript = {
  name: "TypeScript",
  href: "https://www.typescriptlang.org/",
  logo: "/assets/images/technologies/typescript.png",
};
const express = {
  name: "Express.js",
  href: "https://expressjs.com/",
  logo: "/assets/images/technologies/express.png",
};
const node = {
  name: "node.js",
  href: "https://nodejs.org/en",
  logo: "/assets/images/technologies/node.png",
};
const react = {
  name: "React ",
  href: "https://react.dev/",
  logo: "/assets/images/technologies/react.png",
};
const sass = {
  name: "Sass ",
  href: "https://sass-lang.com/",
  logo: "/assets/images/technologies/sass.png",
};
const css = {
  name: "CSS 3 ",
  href: "https://www.w3.org/Style/CSS/Overview.en.html",
  logo: "/assets/images/technologies/css.png",
};
const bash = {
  name: "GNU Bash",
  href: "https://www.gnu.org/software/bash/",
  logo: "/assets/images/technologies/bash.png",
};
const graphql = {
  name: "GraphQL",
  href: "https://graphql.org/",
  logo: "/assets/images/technologies/graphql.png",
};
const html = {
  name: "HTML 5",
  href: "https://html.spec.whatwg.org/",
  logo: "/assets/images/technologies/html.png",
};
const postcss = {
  name: "postcss",
  href: "https://postcss.org/",
  logo: "/assets/images/technologies/postcss.png",
};
const postgresql = {
  name: "PostgreSQL",
  href: "https://www.postgresql.org/",
  logo: "/assets/images/technologies/postgresql.png",
};
const reactRouter = {
  name: "React Router",
  href: "https://reactrouter.com/en/main",
  logo: "/assets/images/technologies/react-router.png",
};
const reactRedux = {
  name: "React Redux",
  href: "https://react-redux.js.org/",
  logo: "/assets/images/technologies/react-redux.png",
};
const mongodb = {
  name: "MongoDB",
  href: "https://www.mongodb.com/",
  logo: "/assets/images/technologies/mongodb.png",
};

export const currentTechnologies = [
  javascript,
  typescript,
  react,
  node,
  express,
  css,
  html,
  graphql,
];
export const otherTechnologies = [
  reactRedux,
  reactRouter,
  postcss,
  sass,
  bash,
  postgresql,
  mongodb,
];

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
      <Container maxW={"80rem"}>
        <SectionHeader>about me:</SectionHeader>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Vestibulum lorem
              sed risus ultricies tristique nulla. ultrices in iaculis nunc sed
              augue lacus. Vestibulum lorem sed risus ultricies tristique nulla.
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Text textAlign={"center"} fontSize={"3xl"}>
            Current Technologies:
          </Text>
          <Flex align={"center"} justify={"center"} wrap={"wrap"}>
            {currentTechnologies.map((tech, index) => {
              return <TechnologyBadge key={`${index}_tech.name`} tech={tech} />;
            })}
          </Flex>
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={"3xl"}>
            Other Technologies:
          </Text>
          <Flex align={"center"} justify={"center"} wrap={"wrap"}>
            {otherTechnologies.map((tech, index) => {
              return <TechnologyBadge key={`${index}_tech.name`} tech={tech} />;
            })}
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};
