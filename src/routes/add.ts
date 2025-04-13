import { defineRoutes } from "#config/defineRoutes.js";
import { StatusCodes } from "http-status-codes";
import { db } from "#data";

export default defineRoutes(app => {
    app.post('/api/todos/:msg', (req, res) => {
        const params = req.params as { msg: string; };
        if (!params || !params.msg) {
            return res.code(StatusCodes.BAD_REQUEST).send({
                msg: 'Params Not Passed',
            });
        };

        db.run("INSERT INTO todos (uuid, msg) VALUES (?, ?)", [crypto.randomUUID(), params.msg]);
        return res.code(StatusCodes.OK).send({
            msg: 'Added With Sucess',
        });
    })
});