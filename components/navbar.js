import {
    Box,
    Container,
    Stack,
    Flex,
    Heading,
    Button,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import Logo from './config/logo';
import ToggleTheme from './toggleTheme';
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

const Links = [
    { title: "Feature", href: "feature" },
    { title: "Cta", href: "cta" },
    { title: "Testimonial", href: "testimonial" },
]

const scrollToEml = (emlId) => {
    const eml = document.getElementById(`${emlId}`)
    eml?.scrollIntoView({ behavior: 'smooth' })
}

const Navbar = () => {
    const [currentPage, setCurrnetPage] = useState('/')

    return (
        <Box
            position={'fixed'}
            as={'nav'}
            w={'100%'}
            fontFamily={'heading'}
            color={'chakraContent'}
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            fontWeight={500}
            zIndex={999}
        >
            <Container
                maxW={'container.lg'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                p={2}
                borderRadius={2}
            >
                <Flex mr={5}>
                    <Heading
                        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
                        size={'lg'}
                        letterSpacing={'tighter'}
                    >
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    aignItems="center"
                    mt={{ base: 4, md: 0 }}
                    flexGrow={1}
                    spacing={4}
                    textColor={useColorModeValue('gray.800', 'chakraColor')}
                >
                    {Links.map((link, index) => (
                        <Button
                        bg={'#20202380'}
                            borderRadius={3}
                            key={index}
                            p={2}
                            onClick={() => {
                                setCurrnetPage(link.href)
                                scrollToEml(link.href)
                            }}
                        >
                            {link.title}
                        </Button>
                    ))}
                </Stack>
                <Stack direction={'row'}>
                    <ToggleTheme />

                    <Box display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<FiMenu />}
                                variant='outline'
                            >
                            </MenuButton>
                            <MenuList as={Stack} spacing={2}>
                                {Links.map((link, index) => (
                                    <MenuItem
                                        key={index}
                                        as={Button}
                                        onClick={() => scrollToEml(link.href)}
                                        textColor={'chakraColor'}
                                        _hover={{
                                            textDecoration: "underline"
                                        }}
                                    >
                                        {link.title}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                </Stack>
            </Container>
        </Box >
    )
}

export default Navbar;