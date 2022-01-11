import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Center,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Logo from "../components/Logo";
import Colors from "../utils/useColor";
import { useRouter } from "next/router";

const Links = ["Docs", "ido", "Kauri Pad"];

const NavLink = ({ children, link }) => (
  <Link
    px={2}
    py={1}
    size="sm"
    fontSize={"17px"}
    _hover={{
      textDecoration: "none",
      borderBottom: "1px",
      borderBottomColor: "#7c8ee8",
      opacity: 1,
      _before: {
        width: "80%",
      },
      color: "#fff",
    }}
    href={`/${link}`}
    textTransform="uppercase"
  >
    {children}
  </Link>
);

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={Colors.background} px={4} pt={7}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={8}
            alignItems={"center"}
            ml={{ base: 2, md: 3, lg: 5 }}
          >
            <Logo />
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              mr={10}
            >
              {Links.map((link) => (
                <NavLink key={link} link={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>

            {isOpen ? null : (
              <Button
                mr={{ base: 1, md: 2, lg: 5 }}
                size="md"
                variant="outline"
                borderRadius="sm"
                textColor={Colors.white}
                borderColor={Colors.primary}
                color={Colors.white}
                _active={{ bg: `${Colors.primary}`, color: Colors.dark }}
                fontSize="15px"
              >
                Read Documentation
              </Button>
            )}

            <IconButton
              size={"md"}
              color={Colors.primary}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              ml={4}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            pt={4}
            mt={4}
            display={{ md: "none" }}
            bg={Colors.slight_dark}
          >
            <Stack as={"nav"} spacing={4} align={"center"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// const NavLink = ({ children, href = "" }) => {
//   const router = useRouter();
//   return (
//     <Center
//       as="a"
//       pos="relative"
//       href={href}
//       color={router.pathname.includes(href) ? "#fff" : "#B6B6B6"}
//       _hover={{
//         textDecoration: "none",
//         opacity: 1,
//         _before: {
//           width: "80%",
//         },
//         color: "#fff",
//       }}
//       _before={{
//         content: '""',
//         pos: "absolute",
//         bottom: 0,
//         w: router.pathname.includes(href) ? "80%" : "0",
//         h: "2px",
//         rounded: "full",
//         bgGradient: "linear(#26FFF2, #326CFF)",
//         transition: "all 0.3s ease",
//       }}
//       textTransform="uppercase"
//     >
//       {children}
//     </Center>
//   );
// };
