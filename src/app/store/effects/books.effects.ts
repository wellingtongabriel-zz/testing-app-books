import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { BookService } from "src/app/modules/books/services/book.service";
import { GET_BOOKS } from "../actions/books.actions";
import { map, mergeMap } from 'rxjs/operators'
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "src/app/modules/books/models/interfaces/book.model";
import * as bookActions from '../actions/books.actions';

@Injectable()
export class BookEffect {

    constructor(
        private bookService: BookService, 
        private actions$: Actions) {}

    get_books$: Observable<Action> = createEffect(() => 
        this.actions$
            .pipe(
                ofType(GET_BOOKS),
                mergeMap((action: any) =>
                    this.bookService
                        .getBooks(action.page)
                        .pipe(map((response: Paginated<Book>) => bookActions.AddPaginatedBook({ payload: response }) ))
                )
            )
    );
}