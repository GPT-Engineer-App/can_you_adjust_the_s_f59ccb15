import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlankPageTemplate = () => {
  return (
    <Box position="relative" minH="100vh">
      <Header />
      <Container maxW="container.lg" p={8}>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Page Title
        </Heading>
        <Text mb={10} textAlign="center">
          <Box w={["100%", "300px", "400px"]} h={["200px", "300px", "400px"]} bg="gray.100" mb={10} />
        </Text>
      </Container>
    </Box>
  );
};

export default BlankPageTemplate;