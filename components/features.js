import React from 'react'
import {
    Container,
    Heading,
    Box,
    Icon,
    Text,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react'
import { FiActivity, FiCode, FiUserCheck } from 'react-icons/fi';

const features = [
    { title: "Fully Responsive", description: "Optimized for all devices", icon: FiActivity },
    { title: "Built with Chakra UI", description: "Easy to style and customize", icon: FiCode },
    { title: "Open Source", description: "Free to use and contribute", icon: FiUserCheck },
];

const Features = () => {
    return (
        <Container maxW="container.lg" py={20} id="feature">
            <Heading as="h2" size="xl" textAlign="center" mb={10} color="chakraColor">
                Features
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {features.map((feature, index) => (
                    <Box key={index} textAlign="center" p={5} borderWidth={1} borderRadius="lg">
                        <Icon as={feature.icon} w={10} h={10} mb={4} color="chakraContent" />
                        <Heading size="md" mb={2} color="chakraContent">{feature.title}</Heading>
                        <Text color={useColorModeValue("gray.600", "chakraGray")}>{feature.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    )
}

export default Features;