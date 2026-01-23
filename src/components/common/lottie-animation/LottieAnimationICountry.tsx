'use client'
import {HTMLAttributes} from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

type LottieAnimationICountryProps = HTMLAttributes<HTMLDivElement>;

const LottieAnimationICountry = ({className}: LottieAnimationICountryProps) => {

    return (
        <div className={className} id="icountry-lottie">
            <DotLottieReact
                src="/lotties/icountry.lottie"
                loop
                autoplay
            />
        </div>

    )
}

export default LottieAnimationICountry;