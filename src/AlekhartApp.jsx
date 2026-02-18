import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./routes/Components/NavBar"; 
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { LoginScreen } from "./routes/LoginScreen"; 
import { Gracias } from './routes/Components/Gracias';

export const AlekhartApp = () => {
  return (
    <UsuarioProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} /> 
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UsuarioProvider>
  );
};
