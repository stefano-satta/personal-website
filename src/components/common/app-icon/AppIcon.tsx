import Image, {StaticImageData} from "next/image";
import {HTMLAttributes, PropsWithChildren} from "react";

interface AppIconProps extends HTMLAttributes<HTMLDivElement> {
    url: string | StaticImageData;
    altLabel: string;
    width?: number;
}

const AppIcon = ({url, altLabel, width = 64, className}: PropsWithChildren<AppIconProps>) => {

    return (
        <div className={`app-icon ${className}`}>
            <Image src={url} alt={altLabel} width={width} priority/>
        </div>
    )
}

export default AppIcon;