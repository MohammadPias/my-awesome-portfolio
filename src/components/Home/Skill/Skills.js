import React from 'react';
import { Fade } from 'react-reveal';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', url: 'https://i.ibb.co/qjNx4t3/js.png' },
        { name: 'React js', url: 'https://i.ibb.co/GpxB82V/react.png' },
        { name: 'Redux', url: 'https://i.ibb.co/LgJp4hw/redux.png' },
        { name: 'HTML', url: 'https://i.ibb.co/XY21fht/html.png' },
        { name: 'CSS', url: 'https://i.ibb.co/fvZjtNp/css.png' },
        { name: 'Bootstrap', url: 'https://i.ibb.co/QJ2F0KR/bootstrap.png' },
        { name: 'Tailwind', url: 'https://i.ibb.co/qrsMTbv/tailwind.png' },
        { name: 'MaterialUi', url: 'https://i.ibb.co/jzVQQYY/mui.png' },
        { name: 'Firebase', url: 'https://i.ibb.co/DVyMWgG/firebase.png' },
        { name: 'MongoDb', url: 'https://i.ibb.co/rQm7Sjc/mongoDb.png' },
        { name: 'Express js', url: 'https://i.ibb.co/bBgkc8D/express.png' },
        { name: 'Node js', url: 'https://i.ibb.co/RjP8g7T/node.png' },
        { name: 'Github', url: 'https://i.ibb.co/Nsdp4gK/github.png' },
        { name: 'Adobe illustrator', url: 'https://i.ibb.co/ysM0W0w/ai.png' },
        { name: 'Adobe PhotoShop', url: 'https://i.ibb.co/NtgKH7w/ps.png' },
        { name: 'TypeScript', url: 'https://i.ibb.co/26QjqQP/type-Script.png' },
    ]
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-200'>My Skills</h1>
            <Fade top big>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-3/4 mx-auto mt-12 p-3">
                    {
                        skills.map((skill, index) =>
                            <div
                                key={index}
                                className='p-5 border border-gray-600 rounded-md lg:flex items-center'
                            >
                                <div className='lg:w-1/2 lg:mr-4'>
                                    <img className='w-full' src={skill.url} alt="" />
                                </div>
                                <h1 className="text-lg font-medium text-gray-200 mt-4">
                                    {skill.name}
                                </h1>
                            </div>
                        )
                    }
                </div>
            </Fade>
        </div>
    );
};

export default Skills;