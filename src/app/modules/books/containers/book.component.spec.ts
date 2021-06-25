import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "../models/interfaces/book.model";
import { BookService } from "../services/book.service";
import { BookComponent } from "./book.component";

const BOOK_MOCKS = {
    id: "1",
    title: "book test",
    description: "book description",
    authors: ["author one"],
    pageCount: 1,
    category: "category book",
    imageUrl: "url image",
    isbn10: "isbn10",
    isbn13: "isbn13",
    language: "language",
    publisher: "publisher",
    published: 1111
} as Book;

describe('BookDetailComponent', () => {

    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;
    let bookService: BookService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [
                BookService,
            ]
        });

        bookService = TestBed.get(BookService);
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should close modal', () => {
        component.closeModal();
        expect(component.isShowModal).toBeFalse();
    })

    it('Should open detail modal and get book detail', () => {
        spyOn(bookService, "getBookDetail").and.returnValues(of(BOOK_MOCKS));
        component.openDetail(BOOK_MOCKS.id);

        expect(component.isShowModal).toBeTrue();
        expect(component.bookDetail).toEqual(BOOK_MOCKS);
    })

    it('Should get books', () => {
        const paginatedMock = {
            data: [BOOK_MOCKS],
            page: 1,
            totalPages: 1,
            totalItems: 1
        } as Paginated<Book>;

        spyOn(bookService, "getBooks").and.returnValues(of(paginatedMock));
        component.getBooks();

        expect(component.bookPaginated).toEqual(paginatedMock);
    })
})