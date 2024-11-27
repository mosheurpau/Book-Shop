import express, { Application, Request, Response } from 'express';
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    const name = "Mosheur";
    res.send(name)
})

export default app;