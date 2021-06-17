import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { autenticacaoRoutes } from "./autenticacao.routes";

import { AutenticacaoFormularioComponent } from "./components/autenticacao-formulario/autenticacao-formulario.component";
import { AutenticacaoComponent } from "./containers/autenticacao.component";

import { AutenticacaoService } from "./services/autenticacao.service";

@NgModule({
  declarations: [
    AutenticacaoComponent,
    AutenticacaoFormularioComponent
  ],
  imports: [
    RouterModule.forChild(autenticacaoRoutes)
  ],
  exports: [
    AutenticacaoComponent
  ],
  providers: [
    AutenticacaoService
  ],
})
export class AutenticacaoModule {}
