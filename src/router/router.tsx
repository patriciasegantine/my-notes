import { Navigate, Route, Routes } from "react-router-dom";
import { RouterEnum } from "./router.enum.ts";
import { Home } from "../pages/home/home.tsx";
import { NotFound } from "../pages/not-found/not-found.tsx";
import { Details } from "../pages/details/details.tsx";
import { SignIn } from "../pages/sign-in/sign-in.tsx";
import { SignUp } from "../pages/sign-up/sign-up.tsx";
import { Profile } from "../pages/profile/profile.tsx";
import { NewNote } from "../pages/new-note/new-note.tsx";

export const Router = () => {
  
  return (
    
    <Routes>
      <Route
        path={RouterEnum.home}
        element={<Home/>}
        errorElement={<NotFound/>}
      />
      <Route path={RouterEnum.details} element={<Details/>}/>
      <Route path={RouterEnum.signIn} element={<SignIn/>}/>
      <Route path={RouterEnum.signUp} element={<SignUp/>}/>
      <Route path={RouterEnum.profile} element={<Profile/>}/>
      <Route path={RouterEnum.newNote} element={<NewNote/>}/>
      
      
      <Route path={RouterEnum.notFound} element={<NotFound/>}/>
      <Route path={'*'} element={<Navigate to={RouterEnum.notFound}/>}/>
    </Routes>
  );
};
