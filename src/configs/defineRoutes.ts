import { FastifyInstance } from "fastify";
import { RoutesDefHan } from "./types.js";

export function defineRoutes(handler: RoutesDefHan) {
    return function(app: FastifyInstance, _: {}, done: Function) {
        handler(app);
        done();
    }
}