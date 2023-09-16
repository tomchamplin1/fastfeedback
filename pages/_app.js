import { AuthProvider } from "@/lib/auth";
import { CSSReset } from "@chakra-ui/react";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="App">
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
};

export default App;
