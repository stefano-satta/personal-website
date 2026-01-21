'use client'
import {useLottie} from "lottie-react";
import LottieAnimationData from '@/utility/lotties/icountry-lottie.json';
import {HTMLAttributes} from "react";

type LottieAnimationICountryProps = HTMLAttributes<HTMLDivElement>;

const LottieAnimationICountry = ({className}: LottieAnimationICountryProps) => {
    const defaultOptions = {
        animationData: LottieAnimationData,
        loop: true,
    };

    const { View } = useLottie(defaultOptions);

    return (
        <div className={className} id="icountry-lottie">
            <div className="w-full">{View}</div>
        </div>
    )
}

export default LottieAnimationICountry;