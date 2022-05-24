import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import homeImg from '../../../images/projects/babycare-2.png';
import img3 from '../../../images/projects/babycare-3.png'
import img4 from '../../../images/projects/babycare-4.png'

const BabyCare = () => {
    const [imgSrc, setImgSrc] = useState(homeImg);

    const linkName = [
        { name: 'Live', path: 'https://baby-care-product-83608.web.app/' },
        { name: 'Code', path: 'https://github.com/MohammadPias/baby-care-products-client' },
        { name: 'Server Code', path: 'https://github.com/MohammadPias/baby-care-products-server' },
    ]
    const handleOpenLink = (link) => {
        window.open(link, '_blank')
    }
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-5/6 mx-auto mt-5 p-5'>
                <Fade left big>
                    <div className='lg:col-span-2'>
                        <div className='w-full h-32 lg:h-72 bg-slate-600 overflow-hidden rounded-lg hover:overflow-y-auto'>
                            <img className='w-full rounded-lg  duration-1000 ease-in' src={imgSrc} alt="" />
                        </div>
                        <div className='flex space-x-3 mt-3'>
                            <div
                                onClick={() => setImgSrc(img3)}
                                className='h-16 w-32 overflow-auto'
                            >
                                <img className='w-full h-full rounded-lg' src={img3} alt="" />
                            </div>

                            <div
                                onClick={() => setImgSrc(img4)}
                                className='h-16 w-32 overflow-auto'
                            >
                                <img className='w-full h-full rounded-lg' src={img4} alt="" />
                            </div>
                            <div
                                onClick={() => setImgSrc(homeImg)}
                                className='h-16 w-32 overflow-auto'
                            >
                                <img className='w-full rounded-lg' src={homeImg} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right big>
                    <div>
                        <div className='text-left'>
                            <h1 className='text-3xl text-gray-200 font-bold'>BabyCare Products</h1>
                            <h2 className="text-lg text-gray-400">
                                Technologies:
                                React, React-router, Firebase, React hook form , MongoDb, Heroku and React-Bootstrap
                            </h2>
                            <p className="text-gray-300">
                                * A full-stack single page web application where different types of skin care products are displayed in service section.
                                <br />
                                * After sign in a user can place orders and make payment.
                                <br />
                                * This application contains a dashboard where a user can see his/her ordered products. If users want they delete, update their orders. An admin can see and manage all orders. Admin can add services, delete/update orders etc.
                            </p>
                            <div className='flex justify-between mt-5'>
                                {
                                    linkName.map((link, index) =>
                                        <button
                                            onClick={() => handleOpenLink(link.path)}
                                            key={index}
                                            className='btn btn-primary  transition-all duration-500 hover:border-none relative group ring-2 ring-orange-light'
                                        >
                                            <span className='absolute bg-blue-dark w-0 h-full top-0 left-0 group-hover:w-full transition-all duration-500 rounded-full ease-in-out '></span>
                                            <span className='relative'>{link.name}</span>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default BabyCare;