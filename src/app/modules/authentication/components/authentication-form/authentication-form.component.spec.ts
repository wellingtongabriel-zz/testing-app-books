import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthenticationFormComponent } from "./authentication-form.component";

describe('AuthenticationFormComponent', () => {

    let component: AuthenticationFormComponent;
    let fixture: ComponentFixture<AuthenticationFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuthenticationFormComponent
            ]
        });

        fixture = TestBed.createComponent(AuthenticationFormComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should emit an event to login', () => {
        spyOn(component.onSignIn, 'emit');
        component.signIn();
        expect(component.onSignIn.emit).toHaveBeenCalled();
    });
})