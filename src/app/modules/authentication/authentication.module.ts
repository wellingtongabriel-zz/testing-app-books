import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CookieService } from 'ngx-cookie-service';

import { authenticationRoutes } from "./authentication.routes";
import { AuthenticationFormComponent } from "./components/authentication-form/authentication-form.component";
import { AuthenticationComponent } from "./containers/authentication.component";
import { AuthenticationService } from "./services/authentication.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationFormComponent
  ],
  imports: [
    RouterModule.forChild(authenticationRoutes),
    FormsModule
  ],
  exports: [
    AuthenticationComponent
  ],
  providers: [
    AuthenticationService,
    CookieService
  ],
})
export class AuthenticationModule {}
