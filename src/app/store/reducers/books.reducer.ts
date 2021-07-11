import { BookState, initializeState } from "../state/book.state";
import { Action, createReducer, on } from "@ngrx/store";
import * as bookActions from '../actions/books.actions';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,

    on(bookActions.GetBooks, state => state),
    on(bookActions.AddBook, (bookState: BookState, { payload }) => {
      return { 
            ...bookState, 
            paginatedBook: {
                ...bookState.paginatedBook, 
                data: [...bookState.paginatedBook.data, payload ]
            }
        };
    }),
    on(bookActions.AddPaginatedBook, (bookState: BookState, { payload }) => {
        return { 
            ...bookState, 
            paginatedBook: {...payload },
            Loading: false
        };
    }),
    on(bookActions.SetLoading, (bookState: BookState, { payload }) => {
        return { 
            ...bookState, 
            Loading: payload
        };
    })
);

export function bookReducer(bookState: BookState | undefined, action: Action) {
    return reducer(bookState, action);
}