import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global/GlobalStyles";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter, Routes } from "react-router-dom";
import { Theme } from "./Global/Theme";
import "react-toastify/dist/ReactToastify.css";
import { useProvidersRoutes } from "./Routes/useProviders.routes";
import { useClientsRoutes } from "./Routes/useClients.routes";
import { useMainRoutes } from "./Routes/useMain.routes";
import { useServicesRoutes } from "./Routes/useServices.routes";
import { useContractsRoutes } from "./Routes/useContracts.routes";

export function App() {
  const ProvidersRoutes = useProvidersRoutes();
  const ClientsRoutes = useClientsRoutes();
  const MainRoutes = useMainRoutes();
  const ServicesRoutes = useServicesRoutes();
  const ContractsRoutes = useContractsRoutes();

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
            {ServicesRoutes}
            {ContractsRoutes}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}
