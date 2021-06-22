import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../models/interfaces/book.model";

@Component({
  selector: 'ioa-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  @Input() book: Book;
  @Output() onCloseModal: EventEmitter<void>;

  constructor() {
    this.book = {} as Book;
    this.onCloseModal = new EventEmitter();
  }

  closeModal(): void {
    this.onCloseModal.emit();
  }
}
