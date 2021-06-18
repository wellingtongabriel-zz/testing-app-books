export interface Book {
    id: string;
    title: string;
    description: string;
    authors: Array<string>;
    pageCount: number;
    category: string;
    imageUrl: string;
    isbn10: string;
    isbn13: string;
    language: string;
    publisher: string;
    published: number;
}