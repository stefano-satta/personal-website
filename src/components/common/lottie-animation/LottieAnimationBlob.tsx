'use client'
import {HTMLAttributes, useMemo} from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

type LottieAnimationBlobProps = HTMLAttributes<HTMLDivElement>;

const LottieAnimationBlob = ({className}: LottieAnimationBlobProps) => {

    const renderConfig = useMemo(
        () => ({
            devicePixelRatio: 1
        }),[]
    );

    return (
        <div className={className} id="blob-lottie">
            <DotLottieReact
                src="/lotties/blob.lottie"
                loop
                autoplay
                renderConfig={renderConfig}
            />
        </div>

    )
}

export default LottieAnimationBlob;

