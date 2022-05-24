import React from 'react';
import { Fade } from 'react-reveal';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', url: `${React}` },
        { name: 'React js', url: `${React}` },
        { name: 'Redux', url: `${React}` },
        { name: 'HTML', url: `${React}` },
        { name: 'CSS', url: `${React}` },
        { name: 'Bootstrap', url: `${React}` },
        { name: 'Tailwind', url: `${React}` },
        { name: 'MaterialUi', url: `${React}` },
        { name: 'MongoDb', url: `${React}` },
        { name: 'Express js', url: `${React}` },
        { name: 'Node js', url: `${React}` },
        { name: 'Github', url: `${React}` },
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
                                className='p-4 border border-gray-600 rounded-md'
                            >
                                <h1 className="text-lg font-medium text-gray-200">
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