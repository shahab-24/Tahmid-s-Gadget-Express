import React from 'react';

const Dashboard = () => {
        return (
                <div>
                        <div className='flex flex-col justify-center items-center h-60 bg-purple-700'>
                        
                        <div>
                        <h3 className='text-4xl text-white font-bold my-8 text-center'>Dashboard</h3>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        </div>
                        <div className='flex gap-4 my-10'>
                                <button className='btn btn-outline focus:bg-white  bg-white  focus:text-purple-700 font-semibold text-xl rounded-xl'>Cart</button>
                                <button className='btn btn-outline focus:bg-white  text-white  focus:text-purple-700 font-semibold text-xl rounded-xl'>WishList</button>
                        </div>
                        
                        </div>


                        <div>
                                <h3>Cart</h3>
                        </div>
                        
                </div>
        );
};

export default Dashboard;