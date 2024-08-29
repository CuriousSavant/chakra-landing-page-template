import { Box, Container, Text, Stack, useColorModeValue, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bg={useColorModeValue("#f0e7db", "#20202380")} py={8}>
            <Container maxW="container.lg">
                <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
                    <Text>© 2024 Curious Savant. All rights reserved.</Text>
                    <Stack direction="row" spacing={4}>
                        <Link href="https://github.com/CuriousSavant" isExternal>GitHub</Link>
                        <Link href="https://twitter.com/CuriousSavant" isExternal>Twitter</Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;