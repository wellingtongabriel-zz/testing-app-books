import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { AutenticacaoModule } from './modules/autenticacao/autenticacao.module';
import { LivrosModule } from './modules/livros/livros.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const COMPONENTS = [AutenticacaoModule, LivrosModule, SharedModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ...COMPONENTS
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
