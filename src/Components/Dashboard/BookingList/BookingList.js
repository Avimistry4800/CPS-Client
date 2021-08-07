import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingData from '../BookingData/BookingData';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch(`https://polar-scrubland-16805.herokuapp.com/bookingList?data.email=+loggedInUser.email`)
            .then(res => res.json())
            .then(data => filteredOrder(data))
    }, [])
   

    const filteredOrder = (booking) => {
        console.log("Booking Data", booking[0].data.email)
        const filterData = booking.filter((order) => order.data.email === loggedInUser.email)
        console.log("FilterData:", filterData)
        setBooking(filterData)
    }

    return (
        <div className="">
            <div className="">
                <Sidebar />
            </div>
            <div className="">
                <h1 className="text-center  ml-5" >Your Booking Area :</h1>
                <br/>
                <div class="justify-start">
                {
                    booking.map(book => <BookingData book={book}></BookingData>)
                }
                </div>
               
            </div>
        </div>
    );
};

export default BookingList;