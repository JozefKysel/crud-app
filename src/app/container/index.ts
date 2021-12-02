import TodoRepositoryImpl from "../repository/impl/todoRepository";
import TodoService from "../service/impl/todoService";
import axios from 'axios';

import { appConfig } from "../../config";

const axiosInstance = axios.create(appConfig.axios)

const todoRepository = new TodoRepositoryImpl(axiosInstance);

export const todoService = new TodoService(todoRepository);

