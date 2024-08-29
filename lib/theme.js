import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode("#f0e7db", "chakraBg")(props)
        },
    }),
};

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
};

const fonts = {
    heading: "'M PLUS Rounded 1c'",
};

const colors = {
    chakraBg: "#232931",
    chakraColor: "#EEEEEE",
    chakraContent: "#4ECCA3",
    chakraGray: "#808b96",
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const theme = extendTheme({
    styles,
    components,
    fonts,
    colors,
    config,
});

export default theme;