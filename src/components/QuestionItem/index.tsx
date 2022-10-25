import { Box } from '@mui/system';
import { SimpleQuestion } from 'types/types';
import { VoteButtons } from '../VoteButtons';
import { QuestionItemContainer } from './style';

export interface QuestionItemProps {
    question: SimpleQuestion;
};

export default function QuestionItem(props: QuestionItemProps) {
    const { vote, title, date, description, tags } = props.question;

    return (
        <QuestionItemContainer>
            <div className="question-content">
                <VoteButtons
                    context={{ questionId: "1223", type: "question" }}
                    number={9}
                />
            </div>
            <div className="question-tags">
                {tags.map(tag => (
                    <Box className="tag">{tag}</Box>
                ))}
            </div>
        </QuestionItemContainer>
    );
}