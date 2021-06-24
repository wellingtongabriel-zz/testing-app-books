import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaginatedComponent } from "./paginated.component"

describe('PaginatedComponent', () => {

    let component: PaginatedComponent;
    let fixture: ComponentFixture<PaginatedComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaginatedComponent
            ]
        });

        fixture = TestBed.createComponent(PaginatedComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });
    
    it('Should emit an event when changing pages', () => {
        component.currentPage = 1;
        component._totalPage = 5;
        spyOn(component.onChange, 'emit');
        
        component.next();
        
        expect(component.onChange.emit).toHaveBeenCalled();
    });

    it('Should return false if you can go back from the page', () => {
        component.currentPage = 2;
        const response = component.checkPrevChange();
        expect(response).toBeFalse();
    })

    it('Should return true if there are no previous pages', () => {
        component.currentPage = 1;
        const response = component.checkPrevChange();
        expect(response).toBeTrue();
    })

    it('Should return true when unable to page forward', () => {
        component.currentPage = 1;
        component._totalPage = 1;

        const response = component.checkNextChange();

        expect(response).toBeTrue();
    })

    it('Should return false when able to page forward', () => {
        component.currentPage = 1;
        component._totalPage = 2;

        const response = component.checkNextChange();
        
        expect(response).toBeFalse();
    })
})