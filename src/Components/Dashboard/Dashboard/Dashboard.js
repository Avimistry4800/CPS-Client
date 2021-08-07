import React from 'react';
import AddService from '../../AddService/AddService';
import Booking from '../Booking/Booking';
import ManageService from '../ManageService/ManageService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="flex flex-wrap">
         
            <Sidebar/>
            <AddService />
           
            
            
            
        </div>
    );
};

export default Dashboard;