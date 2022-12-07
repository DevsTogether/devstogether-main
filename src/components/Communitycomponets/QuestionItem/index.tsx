import { Box } from '@mui/system';
import Link from 'next/link';
import { SimpleQuestion } from 'types/types';
import { VoteButtons } from '../VoteButtons';
import { QuestionItemContainer } from './style';

export interface QuestionItemProps {
    question: SimpleQuestion;
};

export default function QuestionItem(props: QuestionItemProps) {
    const { id, vote, title, date, description, tags, responses, views } = props.question;

    return (
        <Link href={`/community/questions/${id}`}>
            <QuestionItemContainer>
                <div className="question-content">
                    <div className="question">
                        <VoteButtons
                            context={{ questionId: id, type: "question" }}
                            number={vote}
                        />
                        <div className="content">
                            <div className="stats">
                                <span>{responses} respostas</span>
                                <span>{views} visualizações</span>
                            </div>
                            <p className="question-title">{title}</p>
                            <div className="question-tags">
                                {tags.map(tag => (
                                    <Box className="tag">{tag}</Box>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </QuestionItemContainer>
        </Link>
    );
}