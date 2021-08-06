import React from 'react';

const OrderListDetails = ({ order }) => {
    console.log("After map:", order.data)
    const { name, price, email } = order.data;
    return (
        <div>
            <table class="table ">
                
                <tbody>
                    <tr>
                        <th scope="row">#</th>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderListDetails;