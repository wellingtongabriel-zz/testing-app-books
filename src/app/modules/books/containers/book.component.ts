import { Component, OnDestroy, OnInit } from "@angular/core";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "../models/interfaces/book.model";
import { BookService } from "../services/book.service";
import { Store } from "@ngrx/store";
import { BookState } from "src/app/store/state/book.state";

import * as bookActions from '../../../store/actions/books.actions';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'ioa-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  isShowModal: boolean;
  bookPaginated: Paginated<Book>;
  bookDetail: Book;
  
  private ngUnsubscribe: Subject<boolean>;

  constructor(
    private store: Store<{ books: BookState }>,
    private bookService: BookService) {
    this.isLoading = false;
    this.isShowModal = false;
    this.bookPaginated = {} as Paginated<Book>;
    this.bookDetail = {} as Book;

    this.ngUnsubscribe = new Subject();
  }
  
  ngOnInit(): void {
    this.store.dispatch(bookActions.SetLoading({ payload: true }));
    this.store.dispatch(bookActions.GetBooks({ page: 1 }));

    this.store
      .select(`books`)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response) => {
        this.bookPaginated = response.paginatedBook;
        this.isLoading = response.loading;
      });
  }

  getBooks(page: number = 1): void {
    this.store.dispatch(bookActions.SetLoading({ payload: true }));
    this.store.dispatch(bookActions.GetBooks({ page: page }));
  }

  closeModal(): void {
    this.isShowModal = false;
  }

  openDetail(id: string): void {
    this.getBookDetail(id);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

  private getBookDetail(id: string): void {
    this.bookService
      .getBookDetail(id)
      .subscribe((book: Book) => { 
        this.bookDetail = book
        this.isShowModal = true;
      });
  }
}