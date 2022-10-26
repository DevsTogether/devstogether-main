import styled from 'styled-components';

export const QuestionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px 12px;
    border-radius: 4px;
    background-color: #2D3237;

    :hover {
        background-color: #353E46;
    }

    .question-content, .question-tags, .question, .content, .stats {
        display: flex;
    }

    .question {
        width: 100%;
        gap: 16px;
    }

    .question-tags {
        gap: 4px;
        justify-content: flex-end;
    }

    .question-title {
        font-weight: bold;
        font-size: 14pt;
    }

    .question .content {
        flex-direction: column;
        gap: 6px;
    }

    .stats {
        font-size: 10pt;
        gap: 8px;
    }

    .tag {
        border-radius: 2px;
        font-size: 8pt;
        background-color: #37474F;
        padding: 2px 7px;
    }
`;