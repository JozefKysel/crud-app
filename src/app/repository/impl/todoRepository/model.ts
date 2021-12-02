import { TodoDto } from "../../../service/todoService/model";
import { DBMetadata } from "../../interface";

export type Todo = TodoDto & DBMetadata
