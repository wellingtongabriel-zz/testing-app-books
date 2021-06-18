export interface Paginated<T> {
    data: Array<T>;    
    page: number;
    totalPages: number;
    totalItems: number;
} 