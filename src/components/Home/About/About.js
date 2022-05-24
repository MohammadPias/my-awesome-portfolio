import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-200'>About me</h1>
            <div className=' w-3/4 mx-auto p-5 flex justify-center items-center'>
                <div className='border border-gray-600 rounded-md p-4  shadow-sm shadow-gray-300'>
                    <div className='h-56 w-full bg-blue-light'>
                        <img src="" alt="" />
                    </div>
                    <div className='text-gray-200 text-left mt-5'>
                        <h3 className="text-2xl font-bold ">
                            Personal Info:
                        </h3>
                        <p className='text-lg font-medium text-gray-400'>
                            Name : <span className='text-gray-200'>Noor Mohammad Pias</span>
                            <br />
                            Age	: <span className='text-gray-200'>24 years</span>
                            <br />
                            Nationality : <span className='text-gray-200'>Bangladeshi (by birth)</span>
                            <br />
                            Mobile : <span className='text-gray-200'>01854099259</span>
                            <br />
                            Email : <span className='text-gray-200'>noor.mohammadpias14@gmail.com</span>
                            <br />
                            Education : <span className='text-gray-200'>B.A (hons)</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;