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

export interface CommunityPageProps {
    questions: SimpleQuestion[];
};

