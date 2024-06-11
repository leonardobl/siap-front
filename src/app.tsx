import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global/GlobalStyles";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter, Routes } from "react-router-dom";
import { Theme } from "./Global/Theme";
import "react-toastify/dist/ReactToastify.css";
import { useProvidersRoutes } from "./Routes/useProviders.routes";
import { useClientRoutes } from "./Routes/useClient.routes";
import { useMainRoutes } from "./Routes/useMain.routes";

export function App() {
  const ProvidersRoutes = useProvidersRoutes();
  const ClientsRoutes = useClientRoutes();
  const MainRoutes = useMainRoutes();

  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            {MainRoutes}
            {ProvidersRoutes}
            {ClientsRoutes}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}
