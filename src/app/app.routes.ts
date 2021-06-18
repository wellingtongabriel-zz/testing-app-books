import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'books',
        loadChildren: () => import('./modules/books/book.module').then(module => module.BooksModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/authentication/authentication.module').then(module => module.AuthenticationModule)
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
