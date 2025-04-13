import { defineRoutes } from "#config/defineRoutes.js";
import { StatusCodes } from "http-status-codes";
import { db } from "#data";

export default defineRoutes(app => {
    app.delete('/api/todos/:uuid', (req, res) => {
        const params = req.params as { uuid: string; };
        if (!params || !params.uuid) {
            return res.code(StatusCodes.BAD_REQUEST).send({
                msg: 'Params Not Passed',
            });
        };

        db.run(`DELETE FROM todos WHERE uuid = ?`, [params.uuid]);
        return res.code(StatusCodes.OK).send({
            msg: 'Removed With Sucess',
        });
    })
});