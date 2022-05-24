import React from 'react';
import { Fade } from 'react-reveal';
import Slider from '../../Slider/Slider';

const Projects = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Fade bottom big>
                <Slider />
            </Fade>
        </div>
    );
};

export default Projects;