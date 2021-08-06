import React, { useEffect, useState } from 'react';
import OrderListDetails from '../OrderListDetails/OrderListDetails';

import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [orderList, setOrderList] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/bookingList')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    // console.log(orderList)
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-8 col-sm-12 col-12 d-flex justify-content-center ml-5 mt-5 pt-5 pb-5">
                <div>
                    <h1 className="text-center mb-5" style={{color:'#21B8F8'}}>Order List</h1>
                <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                </table>
                {
                       orderList && orderList.map(order =>  <OrderListDetails order={order}></OrderListDetails>)
                    }
            
                    

                </div>
            </div>
        </div>
    );
};

export default OrderList;