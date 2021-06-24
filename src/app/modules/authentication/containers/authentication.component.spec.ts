import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { NotifierModule, NotifierService } from "angular-notifier";
import { of } from "rxjs";
import { PaginatedComponent } from "src/app/shared/components/paginated/paginated.component";
import { CookieEnum } from "src/app/shared/models/enums/cookies.enum";
import { CookieGenericService } from "src/app/shared/services/cookies-generic.service";
import { Login } from "../models/interfaces/login.model";
import { User } from "../models/interfaces/user.model";
import { AuthenticationService } from "../services/authentication.service";
import { AuthenticationComponent } from "./authentication.component";

const MOCK_USER = {
    email: "email@gmail.com",
    gender: "M",
    id: "1",
    name: "user name"
} as User;


interface CookieStore { 
    [key: string]: string;
}

class MockRouter {
    navigate = jasmine.createSpy('navigate');
}

let cookieGenericMock: CookieStore = {};

const COOKIE_GENERIC_SERVICE_MOCK = {
    setItem(key: string, value: string): void {
        cookieGenericMock[key] = JSON.stringify(value);
    },
    getitem(key: string): string {
        return JSON.parse(cookieGenericMock[key]);
    }
} 

describe('AuthenticationComponent', () => {

    let component: AuthenticationComponent;
    let fixture: ComponentFixture<AuthenticationComponent>;
    let authenticationService: AuthenticationService;
    let cookieGenericService: CookieGenericService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuthenticationComponent,
            ],
            imports: [
                HttpClientModule,
                CommonModule,
                NotifierModule
            ],
            providers: [
                AuthenticationService,
                PaginatedComponent,
                {
                    provide: CookieGenericService,
                    useClasse: COOKIE_GENERIC_SERVICE_MOCK
                },
                NotifierService,
                { provide: Router, useValue: new MockRouter() }
            ]
        });

        authenticationService = TestBed.get(AuthenticationService);
        cookieGenericService = TestBed.get(CookieGenericService);

        fixture = TestBed.createComponent(AuthenticationComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Deve se logar na aplicação', () => {
        component.login = {
            email: "email@gmail.com",
            password: "123"
        } as Login;

        const tokenMock = "aksdue213-gdfya3-123-dws-d1";

        const headers = new HttpHeaders();
        headers.append("authorization", tokenMock);
        const httpResponseMock = new HttpResponse<User>({ body: MOCK_USER, headers });
        
        spyOn(authenticationService, "signIn").and.returnValues(of(httpResponseMock));
        spyOn(cookieGenericService, "getItem").and.returnValues(tokenMock);

        component.signIn();

        const token = cookieGenericService.getItem(CookieEnum.Token);

        expect(token).toEqual(tokenMock);
    })
})