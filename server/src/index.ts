import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import { router } from './routes.js'

const app = express()

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMITER_TIME) * 60 * 1000, // RATE_LIMITER_TIME in minutes
  max: parseInt(process.env.RATE_LIMITER_MAX_REQUESTS), // Limit each IP per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(
  cors({
    origin: '*',
  })
)
app.use(limiter)
app.use(express.json())
app.use(router)

app.listen(4003, () => console.log('Server is running on PORT 4003'))
