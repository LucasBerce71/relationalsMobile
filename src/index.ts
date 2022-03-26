import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
    return response.status(201).json({ message: 'api running!' });
});

app.listen(8081, () => console.log('API RUNNING NOW!'));