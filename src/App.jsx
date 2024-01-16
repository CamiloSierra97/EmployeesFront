import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Employees from "./components/routes/Employees";
import EmployeeForm from "./components/employees/EmployeeForm";
import EmployeeCreateForm from "./components/employees/EmployeeCreateform";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/edit_employee" element={<EmployeeForm />} />
        <Route path="/create_employee" element={<EmployeeCreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
