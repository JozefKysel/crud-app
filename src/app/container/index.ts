import TodoRepositoryImpl from "../repository/impl/todoRepository";
import TodoService from "../service/todoService";
import axios from 'axios';
import { appConfig } from "../../config";


const axiosInstance = axios.create(appConfig.axios)

// NOTE: using a dependency injection we make unit testing any class
// easier, because we can just mock the injected object
const todoRepository = new TodoRepositoryImpl(axiosInstance);

export const todoService = new TodoService(todoRepository);

