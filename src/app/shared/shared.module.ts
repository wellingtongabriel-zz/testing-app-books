import { NgModule } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { AuthenticationGuard } from "./guard/Authentication/authentication.guard";

const COMPONENTS = [MenuComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class SharedModule {}
