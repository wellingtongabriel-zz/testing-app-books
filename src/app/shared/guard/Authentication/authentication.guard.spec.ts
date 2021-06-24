import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import { ActivatedRouteSnapshot, Router, RouterModule, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthenticationModule } from "src/app/modules/authentication/authentication.module";
import { CookieGenericService } from "../../services/cookies-generic.service";
import { AuthenticationGuard } from "./authentication.guard";

const fakeRouterState = (url: string): RouterStateSnapshot => {
    return {
        url,
    } as RouterStateSnapshot;
}

class MockCookieService {
    check() {
        return true;
    }

    get() {
        const securityPolicy = {
            userId: 1,
        };

        return JSON.stringify(securityPolicy)
    }
}

class MockRouter {
    navigate = jasmine.createSpy('navigate');
}

describe('AuthenticationGuard', () => {

    let authenticationGuard: AuthenticationGuard;
    let cookieGenericService: CookieGenericService;
    let activatedRouteSnapshot: ActivatedRouteSnapshot;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                AuthenticationGuard,
                {
                    provide: CookieService,
                    useClass: MockCookieService
                },
                { provide: Router, useValue: new MockRouter() }
            ],
            imports: [
                AuthenticationModule,
                CommonModule,
                RouterModule
            ]
        });

        cookieGenericService = TestBed.get(CookieGenericService);

        activatedRouteSnapshot = new ActivatedRouteSnapshot();
        authenticationGuard = new AuthenticationGuard(cookieGenericService, TestBed.get(Router));
    });

    it('Should return true if it can authenticate', () => {
        spyOn(cookieGenericService, "checkCookie").and.returnValues(true);
        const response = authenticationGuard.canActivate(activatedRouteSnapshot, fakeRouterState('/fake'));
        expect(response).toBeTrue();
    })


    it('Should return false if unable to authenticate', () => {
        spyOn(cookieGenericService, "checkCookie").and.returnValues(false);
        const response = authenticationGuard.canActivate(activatedRouteSnapshot, fakeRouterState('/fake'));
        expect(response).toBeFalse();
    })
});