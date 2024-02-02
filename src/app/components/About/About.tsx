"use client";
import { Box, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { TechnologyBadge } from "../TechnologyBadge";
import {
  currentTechnologies,
  otherTechnologies,
} from "../../constants/technologies";
import { Just_Another_Hand } from "next/font/google";
import { PageSection } from "../PageSection";

const codingDate = 2021;

export const About = () => {
  return (
    <PageSection title="about" bg="peru">
      <Container maxW={"80rem"}>
        <Flex justify={"space-around"} m={4}>
          <Box maxW={"45%"}>
            <Image
              // boxSize={"100%"}
              maxH={"90%"}
              maxW={"90%"}
              rounded={"full"}
              objectFit={"cover"}
              src={"/assets/images/headshot-dock-square.jpg"}
              alt="Michael Gacetta"
            />
          </Box>
          <Flex direction="column" flexGrow={1} maxWidth={"45%"} gap={".5rem"}>
            <Text fontSize={"2xl"} textDecoration={"underline"}>
              Hello World!
            </Text>
            <Text>
              My name is Michael Gacetta and I am a software engineer. A
              musician for the last 35 years, I transitioned into coding{" "}
              {2024 - codingDate} years ago. I am passionate about problem
              solving and enjoy creating effective solutions with a beautiful,
              clean design.{" "}
            </Text>
            <Text>
              Originally from the Pacific Northwest, I grew up with an
              appreciation for the outdoors and love spending time on the water
              or in the forest, taking care of plants, doing pottery and
              glassblowing, cooking and playing both board games (Carcassonne)
              and video games (Mario Kart).
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Text textAlign={"center"} fontSize={"3xl"}>
            Current Technologies:
          </Text>
          <Flex align={"center"} justify={"center"} wrap={"wrap"}>
            {currentTechnologies.map((tech, index) => {
              return <TechnologyBadge key={`${index}_tech.NAME`} tech={tech} />;
            })}
          </Flex>
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize={"3xl"}>
            Other Technologies:
          </Text>
          <Flex align={"center"} justify={"center"} wrap={"wrap"}>
            {otherTechnologies.map((tech, index) => {
              return <TechnologyBadge key={`${index}_tech.NAME`} tech={tech} />;
            })}
          </Flex>
        </Box>
      </Container>
    </PageSection>
  );
};
