import { ThemeProvider } from "styled-components";
import theme from "./theme.ts";
import GlobalStyle from "./global.styles.ts";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/layout.tsx";

export const App = () => {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle/>
          {/*<AuthRoutes/>*/}
          <Layout/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
