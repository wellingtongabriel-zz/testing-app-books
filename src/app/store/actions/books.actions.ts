import { createAction, props } from "@ngrx/store";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "../../modules/books/models/interfaces/book.model";

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_LIST_BOOKS = 'ADD_LIST_BOOKS';
export const SET_LOADING = 'SET_LOADING';

export const GetBooks = createAction(
    GET_BOOKS,
    props<{ page: number }>()
)

export const AddBook = createAction(
    ADD_BOOK,
    props<{ payload: Book }>()
)

export const AddPaginatedBook = createAction(
    ADD_LIST_BOOKS,
    props<{ payload: Paginated<Book> }>()
)

export const SetLoading = createAction(
    SET_LOADING,
    props<{ payload: boolean }>()
)