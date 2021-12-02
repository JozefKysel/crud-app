import TodoRepositoryImpl from "../../../repository/impl/todoRepository";
import { Todo } from "../../../repository/impl/todoRepository/model";
import { TodoDto } from "./model";

export default class TodoService {
    
    constructor(private todoRepository: TodoRepositoryImpl) {}

    async getAll(): Promise<Todo[]> {
        return this.todoRepository.getAll();
    } 
    
    async getOneById(id: string): Promise<Todo> {
        return this.todoRepository.getOneById(id);
    }

    async save(todoDto: TodoDto) {
        return this.todoRepository.save(todoDto);
    }

    async delete(id: string) {
        return this.todoRepository.deleteById(id);
    }
}