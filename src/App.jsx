import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Employees from "./components/routes/Employees";
import EmployeeForm from "./components/employees/EmployeeForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/create_employee" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
