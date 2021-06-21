import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CookieEnum } from "../../models/enums/cookies.enum";
import { CookieGenericService } from "../../services/cookies-generic.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private cookieGenericService: CookieGenericService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isToken = this.cookieGenericService.checkCookie(CookieEnum.Token);

        if (!isToken) {
            this.router.navigate(['login'])
            return false;
        }

        return true;
    }
}
