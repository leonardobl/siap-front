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
import { useUserRoutes } from "./Routes/useUser.routes";
import { useProviderTypeRoutes } from "./Routes/ useProviderType.routes";
import { useSchedulesRoutes } from "./Routes/useSchedules.routes";
import { useNewScheduleRoutes } from "./Routes/useNewSchedule.routes";

export function App() {
  const ProvidersRoutes = useProvidersRoutes();
  const ClientsRoutes = useClientsRoutes();
  const MainRoutes = useMainRoutes();
  const ServicesRoutes = useServicesRoutes();
  const ContractsRoutes = useContractsRoutes();
  const UsersRoutes = useUserRoutes();
  const ProviderTypeRoutes = useProviderTypeRoutes();
  const SchedulesRoutes = useSchedulesRoutes();
  const NewSchedulesRoutes = useNewScheduleRoutes();

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
            {UsersRoutes}
            {ProviderTypeRoutes}
            {SchedulesRoutes}
            {NewSchedulesRoutes}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}
