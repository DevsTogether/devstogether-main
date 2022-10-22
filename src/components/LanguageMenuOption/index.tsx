import { Drawer } from "./style";

export interface LanguageMenuOptionProps {
    label: string;
    image?: string;
    imageComponent?: any;
    onClick?: Function;
}

export default function LanguageMenuOption(props: LanguageMenuOptionProps) {
    const { label, image, imageComponent, onClick } = props;

    return (
        <Drawer>
            <h4 onClick={() => { if (onClick) onClick() }}>
                <>
                    {image && (
                        <img src={image} alt="" />
                    )}

                    {imageComponent && (
                        imageComponent()
                    )}
                </>

                {label}
            </h4>
        </Drawer>
    );
}