import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global/GlobalStyles";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Theme } from "./Global/Theme";
import { Login } from "./Components/Pages/Login";
import "react-toastify/dist/ReactToastify.css";
import { UserRegister } from "./Components/Pages/UserRegister";
import { ProtectedRoute } from "./Components/Atoms/ProtectedRoute";
import { Client } from "./Components/Pages/Client";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="cliente"
                element={
                  <ProtectedRoute>
                    <Client />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="cadastro-usuario" element={<UserRegister />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}
