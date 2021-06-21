import { Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/guard/Authentication/authentication.guard';

export const appRoutes: Routes = [
    {
        path: 'books',
        canActivate: [AuthenticationGuard],
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
