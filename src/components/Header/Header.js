import React from 'react';
import { socialIcons } from '../Home/Menus/Menus';

const Header = () => {
    const handleOpenLink = (link) => {
        window.open(
            `${link}`, "_blank");
    }
    return (
        <div className='h-20 flex justify-end items-center mr-8 lg:mr-20'>
            <div className='flex justify-center items-center space-x-5 mr-5 invisible lg:visible'>
                {
                    socialIcons.map((icon, index) =>
                        <div
                            onClick={() => handleOpenLink(icon.path)}
                            key={index}
                            className='h-6 w-6 rounded-full bg-gray-200 ring-2 ring-gray-500 text-md cursor-pointer'
                        >
                            {icon.icon}
                        </div>
                    )
                }
            </div>
            <button
                onClick={() => handleOpenLink("https://drive.google.com/file/d/1i0ViNQZClGij9zFUElSv0irpqYZVc_ci/view?usp=sharing", "_blank")}
                className='btn btn-outline  transition-all duration-500 hover:border-none relative group'>
                <span className='absolute bg-orange-light w-0 h-0 left-0 bottom-0 group-hover:w-full group-hover:h-full transition-all duration-500 rounded-full ease-in-out '></span>
                <span className='absolute bg-orange-light w-0 h-0 top-0 right-0 group-hover:w-full group-hover:h-full transition-all duration-500 rounded-full ease-in-out '></span>
                <span className='relative'>Resume</span>
            </button>
        </div>
    );
};

export default Header;