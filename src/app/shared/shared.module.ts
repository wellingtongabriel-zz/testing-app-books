import { NgModule } from "@angular/core";
import { AutenticacaoGuard } from "./guard/Authentication/autenticacao.guard";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AutenticacaoGuard
  ]
})
export class SharedModule {}
