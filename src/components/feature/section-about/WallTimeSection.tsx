"use client"

import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import AboutWallImg from '../../../../public/about-wall-img.jpg';
import Image from 'next/image';


const WallTimeSection = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);

      return () => {
        clearInterval(timer);
      }
    }, [])

    return (
        <section id="wall-time-hero" className="container">
            <Card>
                <Image src={AboutWallImg} alt={'about-wall-img'} fill priority/>
                <div suppressHydrationWarning className="h-100 w-100 d-flex align-items-center justify-content-center position-absolute text-white text-lowercase fw-ultra-bold text-center">
                    {currentTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
                </div>
            </Card>
        </section>
    )
}

export default WallTimeSection;