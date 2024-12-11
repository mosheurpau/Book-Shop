import express, { Application, Request, Response } from 'express';
import bookRouter from "./module/book/book.router";
import orderRouter from "./module/order/order.router";
const app: Application = express()
app.use(express.json())
app.use('/api/products',bookRouter)
app.use('/api/orders',orderRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message:"server live"})
})

export default app;