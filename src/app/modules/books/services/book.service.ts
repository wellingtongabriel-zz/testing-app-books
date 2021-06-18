import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieEnum } from "src/app/shared/models/enums/cookies.enum";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { CookieGenericService } from "src/app/shared/services/cookies-generic.service";
import { environment } from "src/environments/environment";
import { Book } from "../models/interfaces/book.model";

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor(private httpClient: HttpClient) {}

    getUsers(page: number): Observable<Paginated<Book>> {
        return this.httpClient.get<Paginated<Book>>(`${environment.api}/books?page=1&amount=12`);
    }
}
