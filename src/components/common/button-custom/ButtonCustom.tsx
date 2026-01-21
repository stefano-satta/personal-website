import {Button} from "react-bootstrap";
import {HTMLAttributes} from "react";
import Icon from "@/components/common/icons/Icon";
import icon from "@/utility/icon";

interface ButtonCustomProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
    iconType?: Partial<IconProject>;
    onClickAction?: () => void;
}

const ButtonCustom = (props: ButtonCustomProps) => {
    const {label, iconType = icon.arrowUp, className, style, onClickAction} = props;

    return (
        <Button className={`px-5 d-flex rounded-pill bg-white text-black position-relative ${className}`}
                style={style}
                id="button-custom"
                onClick={() => onClickAction?.()}>
            <span className="flex-grow-1">{label}</span>
            <span className="ms-3 p-1 rounded-circle bg-yellow-accent position-absolute z-1">
                <Icon icon={iconType} className="text-black" style={{transform: 'rotate(45deg)'}}/>
            </span>
        </Button>
    )
}

export default ButtonCustom;