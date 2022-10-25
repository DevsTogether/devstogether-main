import styled from "styled-components";

export const VoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;

    .upvote-icon, .downvote-icon {
        fill: #ccc;
    }

    .downvote-icon {
        transform: rotate(180deg);
    }

    .number {
        width: fit-content;
        font-size: 14pt;
    }

    .selected {
        fill: #fff;
    }
`;