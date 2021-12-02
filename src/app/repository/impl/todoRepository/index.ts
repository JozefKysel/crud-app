import { AxiosInstance } from "axios";
import { TodoDto } from "../../../service/todoService/model";
import { Repository } from "../../interface";
import { Todo } from "./model";

// NOTE: for the sake of convenience, let's assume that 
// axios instance is a database client, and that it's doing call to db rather than to 
// a third party API (because concept is the same anyway)

// NOTE2: also let's assume that that our 'db' calls are made to a schema constrained database
// and we always know what we're getting
export default class TodoRepositoryImpl implements Repository<Todo, TodoDto> {

    constructor(private client: AxiosInstance) {}

    async getAll(): Promise<Todo[]> {
        try {
            return this.client.get('/todos');
        } catch(error) {
            // NOTE: in the real app, this error should be translated
            // into some convenient object (something like TodoRepositoryException),
            // and propagated upstream like that
            throw error;
        }
    }

    async getOneById(id: string): Promise<Todo> {
        try {
            return this.client.get(`/todos/${id}`);
        } catch (error) {
            throw error;          
        }
    }

    async save(todo: TodoDto): Promise<Todo> {
        try {
            return this.client.post('/todos', todo);
        } catch (error) {
            throw error;
        }
    }

    async deleteById(id: string): Promise<string> {
        try {
            return this.client.delete(`/todos/${id}`);
        } catch (error) {
            throw error;          
        }
    }
}