import { NgModule } from "@angular/core";
import { AutenticacaoGuard } from "./guard/Autenticacao/autenticacao.guard";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AutenticacaoGuard
  ]
})
export class SharedModule {}
