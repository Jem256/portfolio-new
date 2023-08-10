/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { client } from '../../client';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className='head-text'>
                I Know that <span>Good Design</span> <br />
                means <span>Good Business</span>
            </h2>

            <div className='app__profiles'>
                {abouts?.map((about, index) => (
                    <motion.div
                        // whileInView={{ opacity: 1 }}
                        // whileHover={{ scale: 1.1 }}
                        // transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        {/* <img
                            src={urlFor(about.imgUrl).url()}
                            alt={about.title}
                        /> */}
                        <h2 className='bold-text'>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>
                            {about.description}
                        </p>
                        <a
                            href='https://cdn.sanity.io/files/qaz75joi/production/8447b54b9f2880115bd730d87f7ae490c34ab870.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn'
                        >
                            Download CV
                        </a>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);
