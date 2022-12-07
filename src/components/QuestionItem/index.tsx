import { Box } from '@mui/system';
import Link from 'next/link';
import { SimpleQuestion } from 'types/types';
import { VoteButtons } from '../VoteButtons';
import { QuestionItemContainer } from './style';

export interface QuestionItemProps {
    question: SimpleQuestion;
};

export default function QuestionItem(props: QuestionItemProps) {
    const { id, vote, title, date, user, tags, responses, views } = props.question;

    return (
        <Link href={`/community/questions/${id}`} target="_blank">
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
                            <div className="question-footer">
                                <div className="user">
                                    <span><Link href={`/users/${user?.id ?? 0}`}>{user?.name ?? "No User"}</Link></span>
                                    <span> • <>{date.}</></span>
                                </div>
                                <div className="tags">
                                    {tags.map((tag, i) => (
                                        <Box className="tag" key={i}>{tag}</Box>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </QuestionItemContainer>
        </Link>
    );
}