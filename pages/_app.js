import { AuthProvider } from "@/lib/auth";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "@/styles/globals.css";
import theme from "@/styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
