import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';


const OrderList = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className='flex justify-between'>
                <h3 className="text-3xl font-semibold ">Order List</h3>
                {user ? <button className='btn btn-secondary'>{user?.displayName}</button> :
                    <>User Null</>
                }
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;