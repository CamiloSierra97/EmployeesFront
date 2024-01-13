import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import EditEmployee from "./components/employees/EditEmployee";
import CreateEmployee from "./components/employees/CreateEmployee";
import Employees from "./components/routes/Employees";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employees/:id" element={<EditEmployee />} />
        <Route path="/create_employee" element={<CreateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
