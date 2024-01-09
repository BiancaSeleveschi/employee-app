import "./App.css";
import { Navbar } from "./components/Navbar";
import { EmployeeForm } from "./views/EmployeeForm";
import  {Home}  from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="employee-form" element={<EmployeeForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
