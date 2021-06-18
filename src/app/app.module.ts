import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { BooksModule } from './modules/books/book.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

const COMPONENTS = [AuthenticationModule, BooksModule, SharedModule];

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
