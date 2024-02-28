import { GlobalProvider } from "./context/global-context.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./theme.ts";
import GlobalStyle from "./global.styles.ts";
import { Router } from "./router/router.tsx";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle/>
          <Router/>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalProvider>
  )
}
