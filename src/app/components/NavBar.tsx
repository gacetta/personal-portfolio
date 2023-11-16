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

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"fixed"}
        w={"100vw"}
        top={0}
        left={0}
        zIndex={25}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Michael Gacetta</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <NavLink>
                <InfoIcon />
                About
              </NavLink>
              <NavLink>
                <CalendarIcon />
                Resume
              </NavLink>
              <NavLink>
                <CopyIcon />
                Projects
              </NavLink>
              <NavLink>
                <EmailIcon />
                Contact
              </NavLink>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
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
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
