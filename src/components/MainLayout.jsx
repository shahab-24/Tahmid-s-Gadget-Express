

import Home from './Home';
import Navbar from './Navbar';

const MainLayout = () => {
        return (
                <div className='bg-[#9538E2]  min-h-[650px] relative z-4'>
                        <Navbar></Navbar>
                        <Home></Home>
                

                        
                </div>
        );
};

export default MainLayout;