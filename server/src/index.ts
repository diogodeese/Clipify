import cors from 'cors'
import express from 'express'
import { router } from './routes.ts'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)
app.use(express.json())
app.use(router)

app.listen(4003, () => console.log('Server is running on PORT 4003'))
