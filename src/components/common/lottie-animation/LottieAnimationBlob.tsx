'use client'
import {useLottie} from "lottie-react";
import LottieAnimationData from '@/utility/lotties/blob.json';
import {HTMLAttributes} from "react";

type LottieAnimationBlobProps = HTMLAttributes<HTMLDivElement>;

const LottieAnimationBlob = ({className}: LottieAnimationBlobProps) => {
    const defaultOptions = {
        animationData: LottieAnimationData,
        loop: true,
    };

    const { View } = useLottie(defaultOptions);

    return (
        <div className={className} id="blob-lottie">
            <div className="w-full">{View}</div>
        </div>
    )
}

export default LottieAnimationBlob;