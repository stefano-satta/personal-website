import Image, {StaticImageData} from "next/image";
import {PropsWithChildren} from "react";

interface AppIconProps {
    url: string | StaticImageData;
    altLabel: string;
    width?: number;
}

const AppIcon = ({url, altLabel, width = 64}: PropsWithChildren<AppIconProps>) => {

    return (
        <div className="app-icon">
            <Image src={url} alt={altLabel} width={width} priority/>
        </div>
    )
}

export default AppIcon;