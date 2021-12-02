import e from "express";
import TodoRepositoryImpl from "../../repository/impl/todoRepository";
import { Todo } from "../../repository/impl/todoRepository/model";
import { TodoDto } from "./model";

export default class TodoService {
    
    constructor(private todoRepository: TodoRepositoryImpl) {}

    async getAll(): Promise<Todo[]> {
        try {
            return this.todoRepository.getAll();
        } catch (error) {
            // there is a potential for taking an action 
            // is some error occured on a db layer, or to translate the
            // repository layer exception to something that would make
            // sense for frontend application
            throw error;
        }
    } 
    
    async getOneById(id: string): Promise<Todo> {
        try {
            return this.todoRepository.getOneById(id);
        } catch (error) {
            throw error;   
        }
    }

    async save(todoDto: TodoDto): Promise<Todo> {
        try {
            return this.todoRepository.save(todoDto);
        } catch (error) {
            throw error;
        }
            
    }

    async delete(id: string): Promise<string> {
        try {
            return this.todoRepository.deleteById(id);
        } catch (error) {
            throw error;
        }
    }
}