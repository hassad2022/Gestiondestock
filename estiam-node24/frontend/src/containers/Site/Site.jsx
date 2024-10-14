import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../../components/UI/NAVBAR/NavBar"
import Contact from "./Accueil/Contact"
import Accueil from "./Accueil/Accueil"
import Application from "./Application/Application"


export default function Site() {
  
    return (
        <>
            <NavBar />
            <Routes>     
                <Route path="/" exact element={<Accueil />} />
                <Route path="/livres" exact element={<Application />} />
                <Route path="/contact" exact element={<Contact />} />    
            </Routes>
        </>
    
  )
}