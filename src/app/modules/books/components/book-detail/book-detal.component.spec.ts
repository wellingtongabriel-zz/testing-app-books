import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BookDetailComponent } from "./book-detail.component";

describe('BookDetailComponent', () => {

    let component: BookDetailComponent;
    let fixture: ComponentFixture<BookDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookDetailComponent
            ]
        });

        fixture = TestBed.createComponent(BookDetailComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should emit an event to close modal', () => {
        spyOn(component.onCloseModal, 'emit');
        component.closeModal();
        expect(component.onCloseModal.emit).toHaveBeenCalled();
    });
})