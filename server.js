import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

const port = 8080
app.listen(port, () =>{
    console.log('port running on ' + port)
})

app.get("/", (req, res) => {
    res.json({ message: "Welcome to User application." });
});

export default app
