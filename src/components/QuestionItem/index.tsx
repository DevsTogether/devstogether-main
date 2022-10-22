import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Chip } from "@mui/material";

export interface QuestionItemProps {
    votes: {
        up: number,
        down: number
    };
    title: string;
    description: string;
    date: Date;
}

export default function QuestionItem(props: QuestionItemProps) {
    const { votes, title, date, description } = props;

    return (
        <div className="perguntas1">
            <div>
                <div className="votos">
                    <p>{votes.up} upvotes</p>
                    <p>{votes.down} downvotes</p>
                </div>
                <h4>{title}</h4>
                <br />
                <Chip
                    icon={<EmojiEventsIcon />}
                    label="Tag"
                />
            </div>
            <p className="Faca_pergunta">{date.toLocaleDateString()}</p>
        </div>
    );
}