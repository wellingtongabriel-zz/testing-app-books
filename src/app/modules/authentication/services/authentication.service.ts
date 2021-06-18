import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Login } from "../models/interfaces/login.model";
import { Observable } from "rxjs";
import { User } from "../models/interfaces/user.model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private httpClient: HttpClient) {}

    signIn(login: Login): Observable<HttpResponse<User>> {
        return this.httpClient.post<User>(`${environment.api}/auth/sign-in`, login, { observe: 'response' }); 
    }
}