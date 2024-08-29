import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <Container id="hero" maxW="container.lg" py={40} fontWeight={500} textAlign={'center'}>
        <Box textAlign="center" mb={8}>
          <Heading variant="section-title" fontSize="7xl" color="chakraContent">
            Make Landing Page Faster
          </Heading>
          <Text
            fontSize="xl"
            maxW="container.sm"
            mx="auto"
            color={useColorModeValue("gray.500", "chakraGray")}
          >
            This is a free, open-source and powerful landing page template for SaaS projects. It will help you to build your startup faster.
          </Text>
        </Box>
        <Button rightIcon={<FaGithub />} mt={8}>
          <Link href="https://github.com/CuriousSavant">View Source</Link>
        </Button>
      </Container>
    </>
  );
};

export default Hero;
