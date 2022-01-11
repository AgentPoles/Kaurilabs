import { Box, Center, Container, Flex, Link } from "@chakra-ui/layout";
import { HStack, Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Colors from "../utils/useColor";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Box pos="relative" w="100%" h="auto">
      <Container maxW="container.xl">
        <Flex
          w="100%"
          h="150px"
          align="center"
          justify="space-between"
          pl={10}
          pr={10}
        >
          <Logo />

          <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Stack
              spacing={8}
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <MenuItem to="/">Home</MenuItem>
              <MenuItem to="/how">How It Works</MenuItem>
              <MenuItem to="/docs">Docs</MenuItem>
              <MenuItem to="/ido">Ido</MenuItem>
              <MenuItem to="/ido">Kauri Pad</MenuItem>
              <Button
                _focus={{
                  boxShadow: "none !important",
                }}
              >
                Read Documentation
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

function Navbare() {
  return (
    <Box pos="relative" w="100%" h="auto">
      <Container maxW="container.xl">
        <Flex
          w="100%"
          h="150px"
          align="center"
          justify="space-between"
          pl={10}
          pr={10}
        >
          <Logo />

          <HStack spacing="40px">
            <NavLink href="/docs">Docs</NavLink>
            <NavLink href="/ido">Ido</NavLink>
            <NavLink href="/ido">Kauri Pad</NavLink>
            <Button
              _focus={{
                boxShadow: "none !important",
              }}
            >
              Read Documentation
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

const NavLink = ({ children, href = "" }) => {
  const router = useRouter();
  return (
    <Center
      as="a"
      pos="relative"
      href={href}
      color={router.pathname.includes(href) ? "#fff" : "#B6B6B6"}
      _hover={{
        textDecoration: "none",
        opacity: 1,
        _before: {
          width: "80%",
        },
        color: "#fff",
      }}
      _before={{
        content: '""',
        pos: "absolute",
        bottom: 0,
        w: router.pathname.includes(href) ? "80%" : "0",
        h: "2px",
        rounded: "full",
        bgGradient: "linear(#26FFF2, #326CFF)",
        transition: "all 0.3s ease",
      }}
      textTransform="uppercase"
    >
      {children}
    </Center>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It Works</MenuItem>
        <MenuItem to="/docs">Docs</MenuItem>
        <MenuItem to="/ido">Ido</MenuItem>
        <MenuItem to="/ido">Kauri Pad</MenuItem>
        <Button
          _focus={{
            boxShadow: "none !important",
          }}
        >
          Read Documentation
        </Button>
      </Stack>
    </Box>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
