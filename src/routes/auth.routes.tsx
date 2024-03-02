import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./routes.enum.ts";
import { SignIn } from "../pages/sign-in/sign-in.tsx";
import { SignUp } from "../pages/sign-up/sign-up.tsx";

export const AuthRoutes = () => {
  
  return (
    <Routes>
      <Route path={RoutesEnum.signIn} element={<SignIn/>}/>
      <Route path={RoutesEnum.signUp} element={<SignUp/>}/>
    </Routes>
  );
};
