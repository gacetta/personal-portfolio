"use client";

import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  GACETTA_GITHUB,
  GACETTA_INSTAGRAM,
  GACETTA_LINKEDIN,
  GACETTA_MAILTO,
} from "../../constants/links";
import { PageSection } from "../PageSection";

export const Contact = () => {
  return (
    <PageSection title="contact" bg="cornflowerblue" fullHeight center>
      {/* <Image
        boxSize={"80%"}
        objectFit={"contain"}
        src={"/assets/images/airmail_envelope_nobg.png"}
        alt="airmail envelope background"
        opacity={0.4}
        position={"absolute"}
        top={10}
        right={9}
      /> */}
      <List rounded={4} p={4} bg="snow" boxShadow="dark-lg" mx="auto">
        <ListItem>
          <Link
            href={GACETTA_MAILTO}
            isExternal
            display="flex"
            alignItems="center"
          >
            <EmailIcon mr={2} />
            <Text>michael.gacetta@gmail.com</Text>
          </Link>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <PhoneIcon mr={2} />
          <Text>360.791.1333</Text>
        </ListItem>
        <ListItem>
          <Link
            href={GACETTA_GITHUB}
            isExternal
            display="flex"
            alignItems="center"
          >
            <Icon as={FaGithub} mr={2} />
            <Text>@gacetta</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={GACETTA_LINKEDIN}
            isExternal
            display="flex"
            alignItems="center"
          >
            <Icon as={FaLinkedin} mr={2} />
            <Text>@gacetta</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={GACETTA_INSTAGRAM}
            isExternal
            display="flex"
            alignItems="center"
          >
            <Icon as={FaInstagram} mr={2} />
            <Text>@gacetta</Text>
          </Link>
        </ListItem>
      </List>
    </PageSection>
  );
};
