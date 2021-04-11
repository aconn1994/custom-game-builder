
export interface SystemOptions {
    description: string;
    salutation: string;
    owner: string;
}

export interface Feedback {
    favoriteCount: number;
}

export interface ContactForm {
    name: string,
    email: string,
    contactReason: string,
    comment: string;
}