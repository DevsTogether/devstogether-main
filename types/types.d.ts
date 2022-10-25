export interface SimpleQuestion {
    id: string;
    vote: number;
    title: string;
    description: string;
    date: Date | string;
    tags: Array<string>;
};

export interface CommunityPageProps {
    questions: SimpleQuestion[];
};

