'use client'
import {HTMLAttributes} from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

type LottieAnimationBlobProps = HTMLAttributes<HTMLDivElement>;

const LottieAnimationBlob = ({className}: LottieAnimationBlobProps) => {

    return (
        <div className={className} id="blob-lottie">
            <DotLottieReact
                src="/lotties/blob.lottie"
                loop
                autoplay
            />
        </div>

    )
}

export default LottieAnimationBlob;