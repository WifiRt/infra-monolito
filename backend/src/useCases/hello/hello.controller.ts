import { Request, Response } from "express";
import { HelloUseCase } from "./hello.use-case";

export class HelloController {
    async handle(req: Request, res: Response): Promise<Response> {
        const helloUseCase = new HelloUseCase();
        const hello = helloUseCase.getHello();

        return res.send({ hello });
    }
}