import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddCustomerPage from './pages/AddCustomerPage';
import CustomerPage from './pages/CustomerPage';
import AddStaffPage from './pages/AddStaffPage';
import StaffDetailsPage from './pages/StaffDetailsPage';
import ResponsePage from './pages/ResponsePage';
import BranchPage from './pages/BranchPage';
import Layout from './pages/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<HomePage />} path="/home" exact />
            <Route element={<AddCustomerPage />} path="/add_custommer" />
            <Route element={<CustomerPage />} path="/all_customers" />
            <Route element={<AddStaffPage />} path="/add_staff" />
            <Route element={<StaffDetailsPage />} path="/staff_details" />
            <Route element={<ResponsePage />} path="/list_response" />
            <Route element={<BranchPage />} path="/list_branch" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
