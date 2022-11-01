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

export interface CompleteQuestion extends SimpleQuestion {
    type: "write" | "live";
    description: string;
    updatedAt: Date | string;
    closed: boolean;
    user: {
        id: string;
        name: string;
        photo: string;
    }
}

export interface CommunityPageProps {
    questions: SimpleQuestion[];
};



