import { Router, Request, Response } from 'express';
import { todoService } from '../container';

const router = Router();

// in the real app I would add some authentication 
// and param validation middleware for sure
router.get('/todo', (req: Request, res: Response) => {
    return todoService.getAll();
});

router.get('/todo/:id', (req: Request, res: Response) => {
    return todoService.getOneById(req.params.id);
});

router.post('/todo', (req: Request, res: Response) => {
    return todoService.save(req.body);
});

router.delete('/todo/:id', (req: Request, res: Response) => {
    return todoService.delete(req.params.id)
});

export default router;