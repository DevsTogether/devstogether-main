import voteArrowIcon from "@assets/icons/vote-arrow.svg";
import Image from "next/image";
import { useState } from "react";
import { VoteContainer } from "./style";

export interface VoteButtonsProps {
    number: number;
    onUpvote?: Function;
    onDownvote?: Function;
    context: {
        type: "question" | "response",
        questionId: string
    };
};

export function VoteButtons(props: VoteButtonsProps) {
    const { number: numberProp, onUpvote, onDownvote, context } = props;

    const [number, setNumber] = useState<number>(numberProp);
    const [upvoted, setUpvoted] = useState<boolean>(false);
    const [downvoted, setDownvoted] = useState<boolean>(false);
    const onUpClick = async (e: any) => {
        e.preventDefault();

        setNumber(number => (
            number + (
                upvoted ? -1 : 1 + (downvoted ? 1 : 0)
            )
        ));

        setUpvoted(!upvoted);

        if (downvoted) setDownvoted(false);

        const response = await fetch(`/api/vote/up/${context.type}/${context.questionId}`);
        const data = await response.json();

        if (process.env.NEXT_PUBLIC_DEBUG_FRONT == "true") {
            console.log(data);
        }
    };
    const onDownClick = async (e: any) => {
        e.preventDefault();

        setNumber(number => (
            number + (
                downvoted ? 1 : -1 - (upvoted ? 1 : 0)
            )
        ));

        setDownvoted(!downvoted);

        if (upvoted) setUpvoted(false);

        const response = await fetch(`/api/vote/down/${context.type}/${context.questionId}`);
        const data = await response.json();

        if (process.env.NEXT_PUBLIC_DEBUG_FRONT == "true") {
            console.log(data);
        }
    };

    return (
        <VoteContainer>
            <Image src={voteArrowIcon} width={18} height={18} className={`upvote-icon ${upvoted ? "selected" : ""}`} onClick={onUpClick} />
            <span className="number">{number}</span>
            <Image src={voteArrowIcon} width={18} height={18} className={`downvote-icon ${downvoted ? "selected" : ""}`} onClick={onDownClick} />
        </VoteContainer>
    )
}