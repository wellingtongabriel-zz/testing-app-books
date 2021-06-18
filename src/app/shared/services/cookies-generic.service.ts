import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: 'root' })
export class CookieGenericService {

    constructor(private cookieService: CookieService) {}

    setItem<T>(key: string, value: T): void {
        this.cookieService.set(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
        this.cookieService.delete(key);
    }

    getItem<T>(key: string): T {
        const item = JSON.parse(this.cookieService.get(key));
        return item as T;
    } 

    checkCookie(key: string): boolean {
        return this.cookieService.check(key);
    }
}
