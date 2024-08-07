import React, { useEffect, useRef } from 'react';
import './OurPresence.css';

import { motion, useAnimation } from 'framer-motion';

const OurPresence = () => {
    const controls = useAnimation();
    const pinRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start(i => ({
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: i * 0.3 }
                    }));
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (pinRefs[0].current) {
            observer.observe(pinRefs[0].current);
        }

        return () => {
            if (pinRefs[0].current) {
                observer.unobserve(pinRefs[0].current);
            }
        };
    }, [controls, pinRefs]);

    return (
        <div className='map-bg'>
        <div className='map-container marginal'>

            <div className='map-wrap marginal'>
                <div className='pin pin1' ref={pinRefs[0]}>
                      <div class="pulse-country">
                          <span className='absolute tooltip'>Dubai</span>
                      </div>
                </div>
                <div className='pin pin2' ref={pinRefs[1]}>
                      <div class="pulse-state">
                          <span className='absolute tooltip'>Budhni</span>
                      </div>
                </div>
                <div className='pin pin3' ref={pinRefs[2]}>
                      <div class="pulse-state">
                          <span className='absolute tooltip'>Sanghera</span>
                      </div>
                </div>
                <div className='pin pin4' ref={pinRefs[3]}>
                      <div class="pulse-state">
                          <span className='absolute tooltip'>
                          Dhaula</span>
                      </div>
                </div>
                <div className='pin pin5' ref={pinRefs[4]}>
                      <div class="pulse-country">
                          <span className='absolute tooltip'>New York</span>
                      </div>
                </div>
                <div className='pin pin6' ref={pinRefs[0]}>
                      <div class="pulse-country">
                          <span className='absolute tooltip'>England</span>
                      </div>
                </div>
                <img src="./Map/wold-mapx.svg" alt="Map" />
            </div>
        </div>
        </div>
    );
}

export default OurPresence;
