import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import FeatureCard from "../components/FeatureCard";
import Colors from "../utils/useColor";
import { Button } from "@chakra-ui/react";
import { BigKauriImage } from "../components/Logo";
import Blub from "../components/Blub";
import Subscriber from "../components/Subscriber";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import {
  heading_one_text,
  heading_two_text,
  body_one_text,
  body_two_text,
} from "../public/assets/Texts";

const Home = () => {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  return (
    <Stack spacing="100px" align="center">
      <Stack spacing="40px" textAlign="center" align="center">
        <Stack textAlign="center" align="center">
          <Box color="#fff">
            <Text fontSize="26px">Welcome to</Text>
            <Heading fontSize="80px">KAURI IDO</Heading>
          </Box>
          <Text maxW="550px" fontSize="20px">
            KauriLabs makes launching on Solana easy with a token minting lab, a
            launchpad and a dedicated DEX for all listings
          </Text>
        </Stack>

        <Button
          size="lg"
          bgGradient={`linear(to-b,${Colors.primary}, ${Colors.slight_purple})`}
          border="2px"
          borderColor={Colors.primary}
          color={Colors.dark}
          _hover={{ border: "1px" }}
          _active={{ bg: `${Colors.primary}` }}
          fontWeight="bold"
          w="35%"
        >
          Buy Now
        </Button>
      </Stack>

      <Stack align="center" w="100%">
        <Flex
          color="#fff"
          fontWeight="normal"
          justify="space-around"
          w="90%"
          flexWrap="wrap"
        >
          <Stack spacing="40px" maxW="500px" mb="10">
            <Stack>
              <Box maxW={["50%", "60%"]} color="#fff">
                <Heading fontSize={{ base: "48px", md: "48px", lg: "56px" }}>
                  What is Kauri Labs
                </Heading>
              </Box>
              <Text maxW="550px" fontSize="20px">
                KauriLabs makes launching on Solana easy with a token minting
                lab, a launchpad and a dedicated DEX for all listings
              </Text>
            </Stack>

            <Button
              size="lg"
              variant="outline"
              borderRadius="sm"
              borderColor={Colors.primary}
              color={Colors.white}
              _active={{ bg: `${Colors.primary}`, color: Colors.dark }}
              w="40%"
              fontSize="15px"
            >
              Read Documentation
            </Button>
          </Stack>
          <BigKauriImage />
        </Flex>
      </Stack>

      <Stack width={["90%,100%"]}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="50px"
          alignContent="center"
          p={[10, 0]}
        >
          <Blub
            heading_text={heading_one_text}
            body_text={body_one_text}
          ></Blub>
          <Blub
            heading_text={heading_two_text}
            body_text={body_two_text}
          ></Blub>
        </SimpleGrid>
      </Stack>

      <Stack textAlign="center" align="center" w="100%" spacing="40px">
        <Stack color="#fff">
          <Heading fontSize="60px">KAURI ECOSYSTEM</Heading>
          <Text maxW="550px" fontSize="15px" color={Colors.text}>
            a brief note about the Kauri Ecosystem
          </Text>
          <Text maxW="550px" fontSize="30px" fontWeight="bold">
            Features of the Kauri Ecosystem
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" spacing="20px">
          <FeatureCard
            title="Manage Portfolio"
            image="/assets/feature-image 1.png"
            desc="Buy and sell popular digital currencies, keep track of them in the one place."
          />
          <FeatureCard
            title="Protected Securely"
            image="/assets/feature-image 2.png"
            desc="All cash balances are covered by FDIC insurance, up to a maximum of $250,000."
          />
          <FeatureCard
            title="Cryptocurrency Variety"
            image="/assets/feature-image 3.png"
            desc="Supports a variety of the most popular digital currencies and always uptodate."
          />
        </SimpleGrid>
      </Stack>

      <Stack textAlign="center" align="center" w="100%" spacing="40px">
        <Stack color="#fff">
          <Text fontSize={{ base: "60px", md: "60px", lg: "70px" }}>
            OUR ROAD MAP
          </Text>
        </Stack>
        <Box h="250px"></Box>
      </Stack>
      <Stack align="center">
        <Box
          w="85vw"
          maxW="1000px"
          border="1px"
          borderColor={Colors.dark}
          p={5}
          rounded="md"
          align="center"
        >
          <Flex
            color="#fff"
            fontWeight="normal"
            justify="space-around"
            alignContent="center"
            w="100%"
            flexWrap="wrap"
          >
            <Heading
              w="10em"
              fontSize={["35px", "40px"]}
              alignSelf="center"
              mt="1"
              mb="1"
            >
              PROCEED TO IDO
            </Heading>
            <Stack alignSelf="center" mt="1" mb="1">
              <Button
                alignSelf="center"
                bg={Colors.slight_green}
                p={6}
                fontSize="15px"
                color={Colors.white}
              >
                Learn & explore now
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Stack>
      <Stack align="center">
        <Subscriber></Subscriber>
      </Stack>
    </Stack>
  );
};

export default Home;
