import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../models/interfaces/book.model";

@Component({
  selector: 'ioa-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {

  @Input() isLoading: boolean;
  @Input() books: Array<Book>;

  @Output() onCloseModal: EventEmitter<void>;
  @Output() onOpenDetail: EventEmitter<string>;

  constructor() {
    this.isLoading = false;
    this.books = [];
    this.onCloseModal = new EventEmitter();
    this.onOpenDetail = new EventEmitter();
  }
  
  closeModal(): void {
    this.onCloseModal.emit();
  }

  openDetail(id: string): void {
    this.onOpenDetail.emit(id);
  }
}
