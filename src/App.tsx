import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import './App.css';
import CreatePatient from "./CreatePatient";
import CreateTreatment from "./CreateTreatment";
const App = () => {
  return (
    <Routes>
      <Route path="createPatient" element={<CreatePatient />}></Route>
      <Route path="patients/:id/createTreatment" element={<CreateTreatment />}></Route>
      <Route path="patients/:id" element={<Show />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes> );
};
export default App;