'use client'
import {HTMLAttributes} from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import render from "next/dist/compiled/@vercel/og/og";

type LottieAnimationBlobProps = HTMLAttributes<HTMLDivElement>;

const LottieAnimationBlob = ({className}: LottieAnimationBlobProps) => {

    return (
        <div className={className} id="blob-lottie">
            <DotLottieReact
                src="/lotties/blob.lottie"
                loop
                autoplay
                speed={0.8}
            />
        </div>

    )
}

export default LottieAnimationBlob;