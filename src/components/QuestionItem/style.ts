import styled from 'styled-components';

export const QuestionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;

    .question-content, .question-tags {
        display: flex;
    }

    .question-tags {
        gap: 4px;
        justify-content: flex-end;
    }

    .tag {
        border-radius: 2px;
        font-size: 8pt;
        background-color: #37474F;
        padding: 2px 7px;
    }
`;