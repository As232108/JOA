import { Routes, Route } from "react-router-dom";
import Games from "./components/Games";
import Home from "./components/Homes";
import Layout from "./components/Layout";
import Orginization from "./components/Orginization";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>} />
        <Route path="/games" element={<Games />} />
        <Route path="/originization" element={<Orginization/>} />
        
      </Route>
    </Routes>
  );
}
