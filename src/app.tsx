import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global/GlobalStyles";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/home";
import { Theme } from "./Global/Theme";
import { Login } from "./Components/Pages/Login";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}
