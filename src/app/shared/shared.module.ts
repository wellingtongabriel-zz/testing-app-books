import { NgModule } from "@angular/core";

import { LoadingComponent } from "./components/loading/loading.component";
import { MenuComponent } from "./components/menu/menu.component";
import { PaginatedComponent } from "./components/paginated/paginated.component";

import { AuthenticationGuard } from "./guard/Authentication/authentication.guard";

const COMPONENTS = [MenuComponent, PaginatedComponent, LoadingComponent]

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
