import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { environment } from "src/environments/environment";
import { Book } from "../models/interfaces/book.model";

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor(private httpClient: HttpClient) {}

    getBooks(page: number = 1): Observable<Paginated<Book>> {
        return this.httpClient.get<Paginated<Book>>(`${environment.api}/books?page=${page}&amount=12`);
    }

    getBookDetail(id: string): Observable<Book> {
        return this.httpClient.get<Book>(`${environment.api}/books/${id}`);
    }
}
