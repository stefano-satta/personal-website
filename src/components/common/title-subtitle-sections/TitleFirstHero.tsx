"use client"

import {useCallback, useEffect, useState} from "react";

const names = [
    'developer.', 'adventurer.', 'dreamer.'
]

const TitleFirstHero = () => {
    const [newName, setnewName] = useState<string>(names[0]);

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <h1 className="fw-ultra-bold text-center fs-title-mega">
            {newName}
        </h1>
    )
}

export default TitleFirstHero;