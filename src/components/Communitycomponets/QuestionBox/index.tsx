import { CompleteQuestion } from "types/types";
import { VoteButtons } from "../VoteButtons";

interface QuestionBoxProps extends CompleteQuestion {

};

export default function QuestionBox(props: QuestionBoxProps) {
    const { description } = props;
    return (
        <div className="question-container">
            <div className="vote">
                <VoteButtons
                    context={{ questionId: "12345", type: "question" }}
                    number={0}
                />
            </div>
            <div className="content-container">
                <span className="descrition-label">Descrição</span>
                <hr />
                <p>{description}</p>

                description
            </div>
        </div>

    );
}