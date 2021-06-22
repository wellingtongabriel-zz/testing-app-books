import { Component, OnInit } from "@angular/core";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "../models/interfaces/book.model";
import { BookService } from "../services/book.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'ioa-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  isShowModal: boolean;
  isLoading: boolean;
  bookPaginated: Paginated<Book>;
  bookDetail: Book;

  constructor(private bookService: BookService) {
    this.isShowModal = false;
    this.isLoading = false;
    this.bookPaginated = {} as Paginated<Book>;
    this.bookDetail = {} as Book;
  }
  
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(page: number = 1): void {
    this.isLoading = true;

    this.bookService
      .getBooks(page)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((response: Paginated<Book>) => this.bookPaginated = response)
  }

  closeModal(): void {
    this.isShowModal = false;
  }

  openDetail(id: string): void {
    this.getBookDetail(id);
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