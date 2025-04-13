import { defineRoutes } from "#config/defineRoutes.js";
import { StatusCodes } from "http-status-codes";
import { db } from "#data";

export default defineRoutes((app) => {
  app.get("/api/todos", (_, res) => {
    db.all("SELECT * FROM todos", [], (err, rows: any[]) => {
      if (err) {
        res.code(StatusCodes.INTERNAL_SERVER_ERROR).send({
          msg: "A Error Was occurred",
          err: err,
        });
        return;
      }
      const msgs = rows.map((row) => row);
      res.code(StatusCodes.OK).send({
        msgs
      });
    });
  });
});
