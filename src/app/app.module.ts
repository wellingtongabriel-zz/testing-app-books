import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { BooksModule } from './modules/books/book.module';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './shared/interceptor/http-request.interceptor';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducers/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from './store/effects/books.effects';

const COMPONENTS = [AuthenticationModule, BooksModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        vertical: { position: "top" },
        horizontal: { position: "right" }
      }
    }),
    RouterModule.forRoot(appRoutes),
    ...COMPONENTS,
    StoreModule.forRoot({ books: bookReducer }),
    EffectsModule.forRoot([ BookEffect ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
