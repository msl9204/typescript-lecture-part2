import express, {NextFunction} from 'express';

const app = express()

app.use(express.json)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {

})

// 합쳐서 쓸 수 있다.
interface Response extends Express.Response {
    name: string
}

const middleware = (req: Express.Request, res: Response, next: NextFunction) => {
    res.name
}

// 미들웨어는 RequestHandler 타입이다.
app.use((err, req, res, next) => {
    console.log(err.staus)
})


app.listen(8080, () => {

})

