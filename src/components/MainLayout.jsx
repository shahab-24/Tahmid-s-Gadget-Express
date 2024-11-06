

import { Outlet } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
        return (
                <div className='bg-[#9538E2]  min-h-[650px] relative z-4'>
                        <div className='mb-10'>
                        <Navbar></Navbar>
                        </div>
                        <div className=''>
                        <Outlet></Outlet>
                        </div>
                        <div className='mt-10'>
                        
                        </div>
                

                        
                </div>
        );
};

export default MainLayout;