import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Login } from "../../models/interfaces/login.model";

@Component({
  selector: 'ioa-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss']
})
export class AuthenticationFormComponent {

  @Input() login: Login;
  @Output() onSignIn: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.login = {} as Login;
  }

  signIn(): void {
    this.onSignIn.emit();
  }
}
