import cors from 'cors'
import express from 'express'
import { decodeToken } from './middleware/index.js'
import { router } from './routes.js'

const app = express()

app.use(
  cors({
    origin: '*',
  })
)
app.use(decodeToken)
app.use(express.json())
app.use(router)

app.listen(4003, () => console.log('Server is running on PORT 4003'))
