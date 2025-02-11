import Image from "next/image";
import {Button} from "react-bootstrap";


const FlagLanguageButton = (props: FlagLanguageButtonProps) => {
    const {flagUrl, language, altImgText, selectLanguage} = props;

    const handleLangSelected = () => {
        selectLanguage(language);
    }

    return (
        <Button className="bg-transparent" onClick={handleLangSelected}>
            <Image src={flagUrl} alt={altImgText} width={30} height={30} priority/>
        </Button>
    )
}

export default FlagLanguageButton;