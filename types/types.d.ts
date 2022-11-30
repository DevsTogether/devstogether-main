export interface SimpleQuestion {
    id: string;
    vote: number;
    title: string;
    description?: string;
    date: Date | string;
    tags: Array<string>;
    responses: number;
    views: number;
};

export interface Response {

}

export interface CompleteQuestion extends SimpleQuestion {
    type: "write" | "live" | string;
    description: string;
    updatedAt: Date | string;
    closed: boolean;
    responses: Array<Response>
}

export interface CommunityPageProps {
    questions: SimpleQuestion[];
};



