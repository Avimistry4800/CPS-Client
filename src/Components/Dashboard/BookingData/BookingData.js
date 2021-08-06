import React from 'react';


const BookingData = ({ book }) => {
    return (
  
            <div className="mt-5 mt-5 mt-5">
            <card >
                <div>
                    <p>Your Booking Service: <br/> <strong>{book.data.name}</strong></p>
                    <p>Service Price:$ {book.data.price}</p>
                </div>
            </card>
            </div>
        
        
    );
};

export default BookingData;