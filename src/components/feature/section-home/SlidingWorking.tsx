import {useTranslations} from "next-intl";

const SlidingWorking = () => {
    const t = useTranslations('homepage.slidingReference');
    return (
        <section id="sliding-working-hero"
                 className="sliding-container position-relative bg-black font-archivo-black">
            <div className="loop-element first-slider bg-blue">
                <div className="marquee-inner">
                    <span>Accenture</span>
                    <span>Televideocom</span>
                    <span>Universal Music</span>
                    <span>GoRights</span>
                    <span>InnovYou</span>
                    <span>Italian Public Administration</span>
                    <span>Extra Informatica</span>
                </div>
            </div>
            <div className="loop-element second-slider bg-orange">
                <div className="marquee-inner">
                    <span>Accenture</span>
                    <span>Televideocom</span>
                    <span>Universal Music</span>
                    <span>GoRights</span>
                    <span>InnovYou</span>
                    <span>Italian Public Administration</span>
                    <span>Extra Informatica</span>
                </div>
            </div>
        </section>
    )
}

export default SlidingWorking;