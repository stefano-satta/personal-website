import Icon from "@/components/common/icons/Icon";
import icon from "@/utility/icon";
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";
import CustomTooltip from "@/components/common/custom-tooltip/CustomTooltip";


const CookieButton = () => {
    const t = useTranslations('actions');

    return (
        <div className="position-absolute rounded-circle border position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center m-5"
             style={{width: '60px', height: '60px'}}>
            <Link href="/privacy">
                <CustomTooltip text={t("cookies")} placement="top">
                    <Icon icon={icon.cookie} className="text-black" style={{fontSize: '30px'}}/>
                </CustomTooltip>

            </Link>
        </div>
    )
}

export default CookieButton;