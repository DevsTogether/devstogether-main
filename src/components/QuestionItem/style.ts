import styled from 'styled-components';

export const QuestionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 14px;
    border-radius: 4px;
    background-color: #2D3237;
    cursor: pointer;

    :hover {
        background-color: #353E46;
    }

    .question-content, .question-footer, .question, .content, .stats {
        display: flex;
    }

    .question {
        width: 100%;
        gap: 16px;
    }

    .question-footer {
        gap: 4px;
        align-items: flex-end;
        flex-direction: column;
    }

    .question-title {
        font-weight: bold;
        font-size: 14pt;
    }

    .question .content {
        flex-direction: column;
        width: 100%;
        gap: 6px;
    }

    .stats {
        font-size: 10pt;
        gap: 8px;
    }

    .user {
        font-size: 12px;
    }
    
    .tag {
        border-radius: 2px;
        font-size: 8pt;
        background-color: #37474F;
        padding: 2px 7px;
        width: fit-content;
    }
`;