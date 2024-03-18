import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from 'cors'
import helmet from "helmet";
import userRoutes from './routes/user.routes.js'

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Survey project running..." });
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(cors())
app.use('/', userRoutes)
export default app