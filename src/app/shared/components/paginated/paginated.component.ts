import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ioa-paginated',
    templateUrl: './paginated.component.html',
    styleUrls: ['./paginated.component.scss']
})
export class PaginatedComponent {
    
    @Input() currentPage: number;

    _totalPage: number;
    @Input() set total(value: number) {
        this._totalPage = Math.ceil(value);
    }
    
    @Output() onChange: EventEmitter<number>;

    constructor() {
        this._totalPage = 0;
        this.currentPage = 1;
        this.total = 0;
        this.onChange = new EventEmitter();
    }

    prev(): void {
        if (this.checkPrevChange()) {
            return;
        }

        const newPage = this.currentPage - 1;
        this.onChange.emit(newPage);
    }

    next(): void {
        if (this.checkNextChange()) {
            return;
        }

        const newPage = this.currentPage + 1;
        this.onChange.emit(newPage);
    }

    checkPrevChange(): boolean {
        return this.currentPage <= 1;
    }

    checkNextChange(): boolean {
        return this.currentPage >= this.total;
    }
}