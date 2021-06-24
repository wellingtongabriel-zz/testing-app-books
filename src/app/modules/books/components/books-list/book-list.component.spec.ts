import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BooksListComponent } from "./books-list.component";

describe('BooksListComponent', () => {

    let component: BooksListComponent;
    let fixture: ComponentFixture<BooksListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BooksListComponent
            ]
        });

        fixture = TestBed.createComponent(BooksListComponent);
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

    it('Should emit an event to open detail modal', () => {
        spyOn(component.onOpenDetail, 'emit');
        component.openDetail("1");
        expect(component.onOpenDetail.emit).toHaveBeenCalled();
    });
})