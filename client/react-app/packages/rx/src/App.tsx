import "./App.css";
import AppLayout from "./layout/AppLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClientsTable } from "./components/ClientsTable";
import { ClientDetails } from "./components/ClientDetails";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<ClientsTable />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
