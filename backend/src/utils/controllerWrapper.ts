export function controllerWrapper(Controller: any) {
    const controller = new Controller();

    return async (req: any, res: any) => {
        try {
            await controller.handle(req, res);
        }
        catch (err) {
            res.status(500).send({ message: 'Internal server error' });
        }
    }
}