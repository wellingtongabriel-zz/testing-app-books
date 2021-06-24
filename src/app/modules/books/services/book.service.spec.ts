import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Book } from "../models/interfaces/book.model";
import { Paginated } from "../../../shared/models/interfaces/paginated.model";
import { BookService } from "./book.service";

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


const PAGINATED_MOCK = {
    data: [BOOK_MOCKS],
    page: 1,
    totalPages: 1,
    totalItems: 1
} as Paginated<Book>;

describe('BookService', () => {

    let bookService: BookService;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                BookService,
            ]
        });

        bookService = bed.get(BookService);
    });


    it('Should return book list', () => {
        bookService.getBooks(1)
            .subscribe((response: Paginated<Book>) => {

                expect(response.data.length).toBe(1);
                expect(response).toEqual(PAGINATED_MOCK);
            });
    });

    it('Should return the book detail', () => {
        spyOn(bookService, "getBookDetail").and.returnValues(of(BOOK_MOCKS));

        bookService.getBookDetail("1")
            .subscribe((response: Book) => {
                expect(response).toEqual(BOOK_MOCKS);
            });
    });
})