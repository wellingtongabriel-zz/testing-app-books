import { Component } from "@angular/core";
import { Login } from "../models/interfaces/login.model";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import { CookieEnum } from "src/app/shared/models/enums/cookies.enum";
import { User } from "../models/interfaces/user.model";
import { CookieGenericService } from "src/app/shared/services/cookies-generic.service";
import { NotifierService } from "angular-notifier";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'ioa-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  login: Login;

  constructor(
    private authenticationService: AuthenticationService,
    private cookieGenericService: CookieGenericService,
    private notifier: NotifierService,
    private router: Router 
    ) {
    this.login = {} as Login;
  }

  signIn(): void {
    this.authenticationService
      .signIn(this.login)
      .subscribe((response: HttpResponse<User>) => {
        const token = response.headers.get('authorization');
        const user = <User>response.body;
        
        this.cookieGenericService.setItem(CookieEnum.Token, token);
        this.cookieGenericService.setItem<User>(CookieEnum.User, user);
        
        this.router.navigate(['books']);

      }, (err) => {
        console.log('err', err)
        this.notifier.notify('error', 'Erro ao tentar logar, verifique os dados novamente!')
      })
  }
}