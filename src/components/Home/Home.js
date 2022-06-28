import React from 'react';

import './Home.css';
import {motion} from 'framer-motion'
import {useRef, useEffect, useState } from 'react';

const Home = () => {

    const[width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className="main">
            <nav className="stroke">
                <ul>
                    <li><a href="/">LOGO</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>

            <div className="line"/>
            <div className="Banner">
                <p className="FansText">FANS</p>
                <p className="RaterText">RATER</p>
            </div>
    
            <div className="line"/>
            
            <div className="TeamBanner">
                <p className="TeamText">TOP TEAMS</p>
                <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                    <motion.div 
                        drag="x" 
                        dragConstraints={{
                            left: -width,
                            right: 0
                          }}
                        className="inner-carousel"
                        >
                        <motion.div className="item1" key="liv1">
                            <p>liverpool</p>
                        </motion.div>
                        <motion.div className="item2" key="city1">
                            <p>city</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>

            <div className="line"/>
            <div className="PlayerBanner">
                <p className="PlayerText">TOP PLAYERS</p>
                <motion.div 
                    ref={carousel} 
                    className="carousel" 
                    whileTap={{cursor: "grabbing"}}>
                    <motion.div 
                        drag="x" 
                        className="inner-carousel"
                        dragConstraints={{
                            left: -width,
                            right: 0
                            }}
                        >
                        <motion.div className="item1" key="liv1">
                            <p>liverpool</p>
                        </motion.div>
                        <motion.div className="item2" key="city1">
                            <p>city</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="line"/>

            <div className="LeagueBanner">
                <p className="LeagueText">LEAGUES</p>
            </div>

        </div>
    );
};

export default Home;