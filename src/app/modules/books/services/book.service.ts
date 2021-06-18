import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { environment } from "src/environments/environment";
import { Book } from "../models/interfaces/book.model";

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<Paginated<Book>> {
        return this.httpClient.get<Paginated<Book>>(`${environment.api}/books?page=1&amount=12`);
    }
}
