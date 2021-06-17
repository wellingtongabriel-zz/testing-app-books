import { NgModule } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { AutenticacaoGuard } from "./guard/Autenticacao/autenticacao.guard";

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
    AutenticacaoGuard
  ]
})
export class SharedModule {}
