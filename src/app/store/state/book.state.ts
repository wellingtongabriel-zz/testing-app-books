import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "../../../app/modules/books/models/interfaces/book.model";

export interface BookState {
    loading: boolean;
    paginatedBook: Paginated<Book>;
}

export const initializeState = (): BookState => {
    return ({
        paginatedBook: {} as Paginated<Book>,
        loading: false,
    });
}