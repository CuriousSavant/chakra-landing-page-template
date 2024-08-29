import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "John Doe",
    title: "Founder, TechFlow",
    content:
      "This landing page template helped us launch our product much faster. The design is clean and modern, and it is highly customizable.",
    avatar: "/images/john.jpg", // URL ของรูปภาพที่ต้องการใช้
  },
  {
    name: "Jane Smith",
    title: "CEO, InnovateX",
    content:
      "I was able to build a professional-looking page in just a few hours. This template has everything a startup needs!",
    avatar: "/images/jane.jpg", // URL ของรูปภาพที่ต้องการใช้
  },
  {
    name: "Emily Johnson",
    title: "CTO, SoftVerse",
    content:
      "The layout is fantastic, and it's very easy to adapt it to my needs. I highly recommend it for any SaaS project!",
    avatar: "/images/emily.jpg", // URL ของรูปภาพที่ต้องการใช้
  },
];

const Testimonials = () => {
  return (
    <Box id="testimonial" py={16}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" textAlign="center" mb={10} color={"chakraContent"}>
          What Our Users Say
        </Heading>
        <Stack spacing={8} direction={{ base: "column", md: "row" }}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              boxShadow="lg"
              rounded="lg"
              p={6}
              textAlign="center"
            >
              <Avatar size="xl" src={testimonial.avatar} mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {testimonial.name}
              </Heading>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")} mb={4}>
                {testimonial.title}
              </Text>
              <Text color={useColorModeValue("gray.700", "gray.300")}>
                "{testimonial.content}"
              </Text>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;