import { Javascript } from "@mui/icons-material";
import LanguageMenuOption from "../LanguageMenuOption";
import { LanguageMenuContainer } from "./style";

export default function LanguageMenu() {
    return (
        <LanguageMenuContainer>
            <h3>Linguagens</h3>
            <LanguageMenuOption
                image='/boloicon.png'
                label='Todas as linguagens'
            />
            <LanguageMenuOption
                image='/boloicon.png'
                label='Python'
            />
            <LanguageMenuOption
                image='/boloicon.png'
                label='C++'
            />
            <LanguageMenuOption
                label="Javascript"
                imageComponent={() => <Javascript />}
            />
            <LanguageMenuOption
                image='/boloicon.png'
                label='Java'
            />
        </LanguageMenuContainer>
    );
}
