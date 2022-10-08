import express, {ErrorRequestHandler, NextFunction, RequestHandler} from 'express';

const app = express()

app.use(express.json)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {

})

// 합쳐서 쓸 수 있다.
interface Response extends Express.Response {
    name: string
}


/**
 * 이렇게 하면 global 하게 인터페이스가 합쳐진다.
 */
declare global {
    namespace Express {
        export interface Response {
            zerocho: 'god'
        }

        export interface Request {
            zerocho: 'god'
        }
    }
}

// 미들웨어는 RequestHandler 타입이다.
const middleware: RequestHandler<{paramType: string}, {message: string}, {bodyType: string}, {queryType: boolean}, {localType: unknown}> = (req, res, next) => {
    req.params.paramType
    req.body.bodyType
    req.query.queryType
    res.locals.localType
    res.json({
        message: "hello"
    })
    req.zerocho
}

app.use('/', middleware)

const errorMiddleware: ErrorRequestHandler = (err: Error, req, res, next) => {
    console.log(err.status)
}

app.use(errorMiddleware)

app.listen(8080, () => {

})

