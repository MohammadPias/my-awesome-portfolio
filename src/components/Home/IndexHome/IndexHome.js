import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import { menus } from '../Menu';
import banner from '../../../images/banner.png'

const IndexHome = () => {
    const [selectMenu, setSelectMenu] = useState('Home');

    const bg = {
        background: `url(${banner})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className='h-screen' style={bg}>
            <Fade left big>
                <Header />
            </Fade>
            <Fade top big>
                <div className='absolute top-20 p-3 flex flex-col space-y-8 z-30'>
                    {
                        menus?.map((menu, index) =>
                            <Link
                                key={index}
                                to={menu.path}>
                                <div
                                    className={`h-12 w-12 hover:w-full hover:text-white hover:bg-orange-light rounded-full ${selectMenu === menu.name ? 'bg-orange-light text-white' : 'bg-gray-200'} hover:flex justify-center items-center cursor-pointer group shadow-2xl transition-all duration-500 overflow-hidden`}
                                    onClick={() => setSelectMenu(menu.name)}
                                >
                                    <div className='text-center inline-block h-12 w-12 rounded-full text-xl p-2'>
                                        {menu.icon}
                                    </div>
                                    <div className='pr-4'>
                                        < h1 className='text-lg text-white' > {menu.name}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </Fade>
            <Outlet />
        </div>
    );
};

export default IndexHome;