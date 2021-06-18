import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Login } from "../../models/interfaces/login.model";

@Component({
  selector: 'ioa-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss']
})
export class AuthenticationFormComponent {

  @Input() login: Login;
  @Output() onSignIn: EventEmitter<void>; 

  constructor() {
    this.login = {} as Login;
    this.onSignIn = new EventEmitter();
  }

  signIn(): void {
    this.onSignIn.emit();
  }
}
