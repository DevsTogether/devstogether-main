import theme from "@src/styles/theme";
import styled from "styled-components";

export const LanguageMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    color: ${theme.colors.text};
    padding: 1rem 2rem;

    h3 {
        margin-bottom: 1rem;
    }
`;