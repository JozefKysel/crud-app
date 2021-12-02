import { Router, Request, Response } from 'express';
import { todoService } from '../container';

const router = Router();

// NOTE: in the real app I would add some authentication 
// and param validation middleware for sure
router.get('/todo', async (req: Request, res: Response) => {
    try {
        const todos = await todoService.getAll();
        return res.status(200).json(todos);       
    } catch (error) {
        // NOTE: I know that 500's are sent by default
        // however if we had proper error handling (which i avoided to 
        // implement for the sake of simplicity), we would check
        // for error type and then set the status code accordingly
        return res.sendStatus(500);
    } 
});

router.get('/todo/:id', async (req: Request, res: Response) => {
    try {
        const todo = await todoService.getOneById(req.params.id);

        if (!todo) {
            return res.sendStatus(404);
        }

        return res.status(200).json(todo);
    } catch (error) {
        return res.sendStatus(500);
    }
});

router.post('/todo', async (req: Request, res: Response) => {
    try {
        const savedTodo = await todoService.save(req.body);
        res.status(201).json(savedTodo);
    } catch (error) {
        return res.sendStatus(500);
    }
});

router.delete('/todo/:id', async (req: Request, res: Response) => {
    try {
        const deletedTodoId = await todoService.delete(req.params.id);
        res.status(200).json({
            id: deletedTodoId
        });
    } catch (error) {
       return res.sendStatus(500);
    }
});

export default router;