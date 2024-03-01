import { Navigate, Route, Routes } from "react-router-dom";
import { RouterEnum } from "./router.enum.ts";
import { Home } from "../pages/home/home.tsx";
import { NotFound } from "../pages/not-found/not-found.tsx";
import { Details } from "../pages/details/details.tsx";
import { Profile } from "../pages/profile/profile.tsx";

export const Router = () => {
  
  return (
    
    <Routes>
      <Route
        path={RouterEnum.home}
        element={<Home/>}
        errorElement={<NotFound/>}
      />
      <Route path={RouterEnum.details} element={<Details/>}/>
      <Route path={RouterEnum.profile} element={<Profile/>}/>
      
      
      <Route path={RouterEnum.notFound} element={<NotFound/>}/>
      <Route path={'*'} element={<Navigate to={RouterEnum.notFound}/>}/>
    </Routes>
  );
};
