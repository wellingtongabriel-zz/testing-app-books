import { HttpClientModule, HttpResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { User } from "../models/interfaces/user.model";
import { Login } from "../models/interfaces/login.model";

const USER_MOCK = {
    id: "1",
    birthdate: "12",
    email: "user@gmail.com",
    name: "user teste",
    gender: "M"
} as User;

describe('AuthenticationService', () => {

    let authenticationService: AuthenticationService;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                AuthenticationService,
            ]
        });

        authenticationService = bed.get(AuthenticationService);
    });

    it('Should login and return the logged in user', () => {
        const login: Login = {
            email: "login-teste@gmail.com",
            password: "123"
        };

        const httpResponse = new HttpResponse({ body: USER_MOCK });
        spyOn(authenticationService, "signIn").and.returnValues(of(httpResponse));

        authenticationService.signIn(login)
            .subscribe((response: HttpResponse<User>) => {
                expect(response.body).toEqual(USER_MOCK);
            });
    });
})