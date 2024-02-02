"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  CopyIcon,
  EmailIcon,
  HamburgerIcon,
  InfoIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link, animateScroll } from "react-scroll";

interface Props {
  children: React.ReactNode;
  anchor: string;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Link
      activeClass="active"
      className={props.anchor}
      to={props.anchor}
      spy={true}
      smooth={true}
      duration={900}
    >
      <Box
        cursor={"pointer"}
        px={2}
        py={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const scrollToBottom = () => {
    animateScroll.scrollToBottom();
  };

  return (
    <Box
      // bg={useColorModeValue("gray.100", "gray.900")}
      bg={"transparent"}
      px={4}
      pr={8}
      position={"fixed"}
      w={"100vw"}
      top={0}
      left={0}
      zIndex={25}
      backdropFilter={"auto"}
      backdropBlur={"3px"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box
          onClick={scrollToTop}
          cursor={"pointer"}
          fontWeight={"bold"}
          fontSize={"xl"}
          textTransform={"uppercase"}
        >
          Michael Gacetta
        </Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <NavLink anchor="about">
              <InfoIcon mr={1} />
              About
            </NavLink>
            <NavLink anchor="resume">
              <CalendarIcon mr={1} />
              Resume
            </NavLink>
            <NavLink anchor="projects">
              <CopyIcon mr={1} />
              Projects
            </NavLink>
            <NavLink anchor="contact">
              <EmailIcon mr={1} />
              Contact
            </NavLink>
            {/* <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button> */}

            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <MenuItem>About</MenuItem>
                <MenuItem>Resume</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu> */}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
