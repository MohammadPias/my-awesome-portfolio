import React, { useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png';
import image from '../../images/image.png'
import Header from '../Header/Header';
import { menus, socialIcons } from './Menu';
import Fade from 'react-reveal/Fade';

const Home = () => {
    const bg = {
        background: `url(${banner})`,
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const handleOpenLink = (link) => {
        console.log(link)
        window.open(
            `${link}`, "_blank");
    }
    return (
        <div className='w-screen h-screen'>
            <AnimatedCursor
                innerSize={14}
                outerSize={40}
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={2}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
            {/* <Header /> */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Fade right big>
                    <div className='lg:order-2 lg:p-10'>
                        <img className='w-screen lg:w-4/5' src={image} alt="" />
                    </div>
                </Fade>
                <Fade left big>
                    <div className='text-center flex flex-col justify-center items-center space-y-5 p-8 lg:ml-28 lg:order-1'>
                        <h1 className='text-3xl lg:text-5xl text-gray-light font-bold'>Hello, I am <span className='text-orange-light'>Noor Mohammad Pias.</span></h1>
                        <h5 className='text-gray-400 text-lg'>I introduce myself as a React Developer. I have done Some full-stack project with React js, Redux, Node js, MongoDb, Express js, Firebase Authentication, etc.</h5>
                        <button className='btn btn-primary  transition-all duration-500 hover:border-none relative group ring-2 ring-orange-light'>
                            <span className='absolute bg-blue-dark w-0 h-full top-0 left-0 group-hover:w-full transition-all duration-500 rounded-full ease-in-out '></span>
                            <span className='relative'>Download Resume</span>
                        </button>
                        <div className='flex justify-center items-center space-x-5 lg:invisible'>
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
                    </div>
                </Fade>
            </div >
        </div >
    );
};

export default Home;