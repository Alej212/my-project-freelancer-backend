import { Router } from "express";

//* Import Controllers
import exampleController from '../controllers/example'

//* Import Middlewares
import exampleMiddleware from '../middlewares/example'

const router = Router()

router.get('/example', exampleMiddleware, exampleController)

export default router;