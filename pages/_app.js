import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '@/lib/theme'
import Fonts from "@/components/config/fonts";
import Layout from '@/components/layouts/main'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
