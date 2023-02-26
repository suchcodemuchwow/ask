import { PrismaClient } from '@prisma/client';
interface Reader<T> {
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T | T[]>;
    exists(data: Partial<T>): Promise<T>;
}
interface Writer<T> {
    create(data: T): Promise<T | void>;
    update(data: Partial<T>): Promise<void>;
    delete(id: number): Promise<void>;
}
export type Repository<T> = Reader<T> & Writer<T>;
export declare abstract class AbstractRepository<T> implements Repository<T> {
    private readonly ORM;
    private readonly table_name;
    protected constructor(tablename: string, ORM: PrismaClient);
    create(data: T): Promise<void | T>;
    delete(id: number): Promise<void>;
    exists(data: Partial<T> | object): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T[] | T>;
    update(data: Partial<T>): Promise<void>;
}
export {};
