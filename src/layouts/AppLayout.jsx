import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function AppLayout(){
 return <>
  <Navbar />
 
   <Outlet />  

   <Footer />
  </>

} 

