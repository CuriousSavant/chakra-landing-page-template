import React from 'react'
import Navbar from "@/components/navbar";
import { Box } from '@chakra-ui/react';
import Footer from "@/components/footer";

const Main = ({ children }) => {
    return (
        <>
            <Navbar />
            <Box
                maxW={'container.lg'}
                fontFamily={'heading'}
                mx={'auto'}
                py={8}
            >
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Main;
