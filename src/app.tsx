import { GlobalProvider } from "./context/global-context.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./theme.ts";
import GlobalStyle from "./global.styles.ts";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./routes/auth.routes.tsx";

export const App = () => {
  
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle/>
          <AuthRoutes/>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalProvider>
  )
}
