export type DBMetadata = {
    id: string;
}

export interface Repository<T, TDto> {
    getAll(): Promise<T[]>;

    getOneById(id: string): Promise<T>;
    
    save(todo: TDto): Promise<T>;

    deleteById(id: string): Promise<string>;
}