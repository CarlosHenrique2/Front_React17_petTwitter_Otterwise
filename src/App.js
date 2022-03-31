import { AuthProvider } from "./context/auth-context";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
