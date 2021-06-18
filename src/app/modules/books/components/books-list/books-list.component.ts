import { Component, Input } from "@angular/core";
import { Book } from "../../models/interfaces/book.model";

@Component({
  selector: 'ioa-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {

  @Input() books: Array<Book>;

  constructor() {
    this.books = [];
  }
}
