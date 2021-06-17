import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { livrosRoutes } from "./livros.routes";

import { LivrosDetalhesComponent } from "./components/livros-detalhes/livros-detalhes.component";
import { LivrosListagemComponent } from "./components/livros-listagem/livros-listagem.component";
import { LivrosComponent } from "./containers/livros.component";

import { LivrosService } from "./services/livros.service";

@NgModule({
  declarations: [
    LivrosComponent,
    LivrosListagemComponent,
    LivrosDetalhesComponent
  ],
  exports: [
    LivrosComponent
  ],
  imports: [
    RouterModule.forChild(livrosRoutes)
  ],
  providers: [
    LivrosService
  ]
})
export class LivrosModule {}
