import { NgModule } from "@angular/core";
import { AuthenticationGuard } from "./guard/Authentication/authentication.guard";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthenticationGuard
  ]
})
export class SharedModule {}
