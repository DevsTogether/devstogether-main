import styled from "styled-components";

export const VoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;

    .upvote-icon, .downvote-icon, .number {
        filter: brightness(.7);
        transition: .1 ease-in-out;
    }

    .downvote-icon {
        transform: rotate(180deg);
    }

    .number {
        width: fit-content;
        font-size: 14pt;
    }

    .selected, .selected:hover, .selected:focus {
        filter: brightness(1.4);
    }
`;