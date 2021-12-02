import { TodoDto } from "../../../service/impl/todoService/model";
import { DBMetadata } from "../../interface";

export type Todo = TodoDto & DBMetadata
