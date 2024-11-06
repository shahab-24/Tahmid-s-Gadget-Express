

import { Outlet } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
        return (
                <div className='bg-[#9538E2]  min-h-[650px] relative z-4'>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        
                

                        
                </div>
        );
};

export default MainLayout;