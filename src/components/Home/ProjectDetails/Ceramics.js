import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import img2 from '../../../images/projects/ceramic2.jpg'
import img3 from '../../../images/projects/ceramic3.png'
import img4 from '../../../images/projects/ceramic4.png'
import img5 from '../../../images/projects/ceramic5.png'

const Ceramics = () => {
    const [imgSrc, setImgSrc] = useState(img2);

    const linkName = [
        { name: 'Live', path: 'https://snazzy-gumdrop-b9c2c1.netlify.app/' },
        { name: 'Code', path: 'https://github.com/MohammadPias/ceramics-amber-client' },
        { name: 'Server Code', path: 'https://github.com/MohammadPias/ceramics-amber-server' },
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
                                onClick={() => setImgSrc(img2)}
                                className='h-16 w-32 overflow-auto'
                            >
                                <img className='w-full rounded-lg' src={img2} alt="" />
                            </div>
                            <div
                                onClick={() => setImgSrc(img4)}
                                className='h-16 w-32 overflow-auto'
                            >
                                <img className='w-full h-full rounded-lg' src={img4} alt="" />
                            </div>
                            <div
                                onClick={() => setImgSrc(img5)}
                                className='h-16 w-32 overflow-auto'
                            >
                                <img className='w-full h-full rounded-lg' src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right big>
                    <div>
                        <div className='text-left'>
                            <h1 className='text-3xl text-gray-200 font-bold'>Ceramics Amber</h1>
                            <h2 className="text-lg text-gray-400">
                                Front-end Technologies: React js, JavaScript, React-router
                                <br />
                                Back-end Technologies: MongoDb, Express js, Node js
                                <br />
                                Payment Method: Stripe

                            </h2>
                            <p className="text-gray-300">
                                ** Ceramic Amber is an online niche platform in which ceramic products will be found. Here a user can see all products and add products to the cart.
                                <br />
                                ** The cart will be stored in 'Local Storage'. As a result, users can see cart whenever they browse this site. When users will want to place an order, users will be gone Login/Register page. After successfully registering users will be redirected to the place order route and users will see a dashboard page. On my order page, users can track order processing.
                                <br />
                                ** An admin will see additional routes such as Manage Users, Manage Orders, Add Products, Manage Products, etc. Admin can add, delete users, and also can add admin.
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

export default Ceramics;