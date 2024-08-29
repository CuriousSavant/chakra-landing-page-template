import React from 'react'
import {
    Container,
    Heading,
    Button,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'

const Cta = () => {
    return (
        <Container id="cta" maxW="container.lg" py={20} textAlign="center">
            <Heading size="lg" color={useColorModeValue('', 'chakraContent')} mb={4}>
                Ready to Get Started?
            </Heading>
            <Button colorScheme="teal" size="lg">
                <Link href="https://github.com/CuriousSavant">Download Now</Link>
            </Button>
       </Container>
    )
}

export default Cta;