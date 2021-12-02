import { AxiosInstance } from "axios";
import { TodoDto } from "../../../service/impl/todoService/model";
import { Repository } from "../../interface";
import { Todo } from "./model";

// NOTE: for the sake of convenience, let's assume that 
// axios instance is a database client, and that it's doing call to db rather than to 
// a third party API

// NOTE2: also let's assume that that our 'db' calls are made to a schema constrained database
// and we always know what we're getting
export default class TodoRepositoryImpl implements Repository<Todo, TodoDto> {

    constructor(private dbClient: AxiosInstance) {}

    async getAll(): Promise<Todo[]> {
        try {
            return this.dbClient.get('/todos');
        } catch(error) {
            console.log('Some error occured');
            throw error;
        }
    }

    async getOneById(id: string): Promise<Todo> {
        try {
            return this.dbClient.get(`/todos/${id}`);
        } catch (error) {
            console.log('Some error occured');
            throw error;          
        }
    }

    async save(todo: TodoDto): Promise<Todo> {
        try {
            return this.dbClient.post('/todos', todo);
        } catch (error) {
            console.log('Some error occured');
            throw error;
        }
    }

    async deleteById(id: string): Promise<string> {
        try {
            return this.dbClient.delete(`/todos/${id}`);
        } catch (error) {
            console.log('Some error occured');  
            throw error;          
        }
    }
}