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
import FollowUpPage from './pages/FollowUpPage';
import LeaveRequestPage from './pages/LeaveRequestPage';
import AddComponentPage from './pages/AddComponentPage';
import AddRoomsPage from './pages/AddRommsPage';
import AddToursPage from './pages/AddToursPage';
import AddBrandPage from './pages/AddBrandPage';
import AddDesignationPage from './pages/AddDesignationPage';
import CreateTourPage from './pages/CreateTourPage';
import CreateIteneryPage from './pages/CreatIteneraryPage';
import AsignLeadsPage from './pages/AsignLeadsPage';
import LoginPage from './pages/LoginPage';
import TourPage from './pages/TourPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<LoginPage />} path="/login_page"/>


          <Route element={<Layout />}>


            <Route element={<HomePage />} path="/home" exact />
            <Route element={<AddCustomerPage />} path="/add_custommer" />
            <Route element={<CustomerPage />} path="/all_customers" />
            <Route element={<AddStaffPage />} path="/add_staff" />
            <Route element={<StaffDetailsPage />} path="/staff_details" />
            <Route element={<ResponsePage />} path="/list_response" />
            <Route element={<BranchPage />} path="/add_branch" />
            <Route element={<FollowUpPage />} path="/list_followup" />
            <Route element={<LeaveRequestPage />} path="/leave_request" />
            <Route element={<AddComponentPage />} path="/add_components" />
            <Route element={<AddRoomsPage />} path="/add_rooms" />
            <Route element={<AddToursPage />} path="/add_tours" />
            <Route element={<AddBrandPage />} path="/add_brand" />
            <Route element={<AddDesignationPage />} path="/add_designation" />
            <Route element={<CreateTourPage />} path="/create_tours"/>
            <Route element={<CreateIteneryPage />} path="/create_itenary"/>
            <Route element={<TourPage />} path="/created_tours"/>
            <Route element={<AsignLeadsPage />} path="/new_leads"/>


          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
