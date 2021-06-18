import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieGenericService } from '../services/cookies-generic.service';
import { CookieEnum } from '../models/enums/cookies.enum';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private cookieGenericService: CookieGenericService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const isToken = this.cookieGenericService.checkCookie(CookieEnum.Token);
        if (!isToken) {
            return next.handle(request);
        }

        const token = this.cookieGenericService.getItem<string>(CookieEnum.Token);

        const newRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })

        return next.handle(newRequest);
    }
}