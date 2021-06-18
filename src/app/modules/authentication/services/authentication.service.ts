import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Login } from "../models/interfaces/login.model";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) {}

    signIn(login: Login) {
        return this.http.post("https://books.ioasys.com.br/api/v1/auth/sign-in", login); 
    }
}
