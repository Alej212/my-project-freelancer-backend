import { Router } from 'express'
import exampleRoute from '../routes/example'

const router = Router()

router.use(exampleRoute)

export default router
