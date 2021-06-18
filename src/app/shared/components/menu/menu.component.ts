import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/modules/authentication/models/interfaces/user.model";
import { CookieEnum } from "../../models/enums/cookies.enum";
import { CookieGenericService } from "../../services/cookies-generic.service";

@Component({
    selector: 'ioa-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    userName: string;

    constructor(
        private cookieGenericService: CookieGenericService,
        private route: Router
    ) {
        this.userName = this.cookieGenericService.getItem<User>(CookieEnum.User).name;
    }

    logout(): void {
        this.cookieGenericService.removeItem(CookieEnum.Token);
        this.route.navigate(['login']);
    }
}