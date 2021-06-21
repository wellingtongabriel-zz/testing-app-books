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

  isLoading: boolean;
  bookPaginated: Paginated<Book>;

  constructor(private bookService: BookService) {
    this.isLoading = false;
    this.bookPaginated = {} as Paginated<Book>;
  }
  
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(page: number = 1): void {
    this.isLoading = true;

    this.bookService
      .getUsers(page)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((response: Paginated<Book>) => this.bookPaginated = response)
  }
}