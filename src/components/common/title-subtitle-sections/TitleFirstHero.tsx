"use client"

const TitleFirstHero = ({className}: {className?: string}     ) => {

    return (
        <h1 className={`fw-ultra-bold text-center fs-title-mega font-archivo-black text-uppercase ${className}`}>
            Frontend developer
        </h1>
    )
}

export default TitleFirstHero;