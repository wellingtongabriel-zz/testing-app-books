import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { authenticationRoutes } from "./authentication.routes";
import { AuthenticationFormComponent } from "./components/authentication-form/authentication-form.component";
import { AuthenticationComponent } from "./containers/authentication.component";
import { AuthenticationService } from "./services/authentication.service";

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationFormComponent
  ],
  imports: [
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [
    AuthenticationComponent
  ],
  providers: [
    AuthenticationService
  ],
})
export class AuthenticationModule {}
