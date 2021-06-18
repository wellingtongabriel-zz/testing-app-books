import { Component } from "@angular/core";
import { Login } from "../models/interfaces/login.model";
import { AuthenticationService } from "../services/authentication.service";
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { CookieEnum } from "src/app/shared/models/enums/cookies.enum";

@Component({
  selector: 'ioa-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  login: Login;

  constructor(
    private authenticationService: AuthenticationService,
    private cookieService: CookieService,
    private router: Router 
    ) {
    this.login = {} as Login;
  }

  signIn(): void {
    this.authenticationService.signIn(this.login)
    .subscribe(res => {
      this.cookieService.set(CookieEnum.User, JSON.stringify(res));
      this.router.navigate(['login']);
    }, err => {
      console.log('error', err)
    })
  }
}