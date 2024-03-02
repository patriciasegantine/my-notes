import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./routes.enum.ts";
import { Home } from "../pages/home/home.tsx";
import { NotFound } from "../pages/not-found/not-found.tsx";
import { Details } from "../pages/details/details.tsx";
import { Profile } from "../pages/profile/profile.tsx";
import { NewNote } from "../pages/new-note/new-note.tsx";

export const AppRoutes = () => {
  
  return (
    
    <Routes>
      <Route
        path={RoutesEnum.home}
        element={<Home/>}
        errorElement={<NotFound/>}
      />
      <Route path={RoutesEnum.details} element={<Details/>}/>
      <Route path={RoutesEnum.profile} element={<Profile/>}/>
      <Route path={RoutesEnum.newNote} element={<NewNote/>}/>
      <Route path={RoutesEnum.notFound} element={<NotFound/>}/>
      <Route path={'*'} element={<Navigate to={RoutesEnum.notFound}/>}/>
    </Routes>
  );
};
