import React, { createContext, useState } from "react"; 
import Services from './Components/Services/Services';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import AddService from "./Components/AddService/AddService";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Booking from "./Components/Dashboard/Booking/Booking";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import ManageService from "./Components/Dashboard/ManageService/ManageService";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/home">
          <Home/>
        </Route>
        <Route  path="/services">
          <Services/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        
        <PrivateRoute path="/service/:id">
          <Booking />
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/addService">
        <AddService/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/bookingList">
          <BookingList />
        </PrivateRoute>
        <PrivateRoute path="/addReview">
          <AddReview />
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin />
        </PrivateRoute>
        <PrivateRoute path="/orderList">
          <OrderList />
        </PrivateRoute>
        <Route path="/manageService">
          <ManageService />
        </Route>
        {/* <PrivateRoute path="/manageService">
          <ManageService/>
        </PrivateRoute> */}
      </Switch>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
