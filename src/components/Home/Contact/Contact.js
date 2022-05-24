import React from 'react';
import { useForm } from "react-hook-form";
import { Fade } from 'react-reveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data.email)
        if (data?.email) {
            emailjs.send('service_emr492q', 'template_dpyqtv5', data, 'aNnHV4YC9X4QT-GrF')
                .then((result) => {
                    alert('Your message has been sent successfully.')
                    reset();
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                    alert(error.text)
                });
        }
    };
    return (
        <div>
            <h1 className='text-3xl text-gray-200 font-bold'>Contact Me</h1>
            <Fade top big>
                <div className='w-3/4 mx-auto p-3 flex justify-center items-start mt-8'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='w-full lg:w-1/2'
                    >
                        <input
                            className='w-full mb-5 bg-transparent border border-gray-600 outline-none h-10 text-gray-200 text-center'
                            placeholder='Your Name'
                            {...register("name",
                                { required: true })}
                        />
                        <br />
                        <input
                            className='w-full mb-5 bg-transparent border border-gray-600 outline-none h-10 text-gray-200 text-center'
                            placeholder='Your Email'
                            {...register("email",
                                { required: true })}
                        />
                        <br />
                        <input
                            className='w-full mb-5 bg-transparent border border-gray-600 outline-none h-10 text-gray-200 text-center'
                            placeholder='Subject'
                            {...register("subject",
                                { required: true })}
                        />
                        <br />
                        <textarea
                            className='w-full mb-5 bg-transparent border border-gray-600 outline-none h-10 text-gray-200 text-center'
                            placeholder='Body'
                            {...register("body",
                                { required: true })}
                        />
                        <br />
                        <input
                            type="submit"
                            className='w-full bg-orange-light h-10 text-white'
                        />
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;