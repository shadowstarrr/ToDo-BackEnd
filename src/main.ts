import Fasload from '@fastify/autoload';
import Fascors from '@fastify/cors';
import { logger } from '#func';
import Fastify from 'fastify';
import path from 'path';
import ck from "chalk";
import { db } from '#data';

const app = Fastify();

app.register(Fascors, { origin: "*" });
app.register(Fasload, { 
    dir: path.join(import.meta.dirname, 'routes'),    
    routeParams: true
});

app.addHook('onRoute', ({ method, path }) => {
    if (method === 'HEAD' || method === 'OPTIONS') return;
    logger.success(`Route: ${ck.blueBright(method)} ${ck.yellowBright(path)}`);
});

const port = process.env.PORT ?? 4000;
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS todos (uuid STRING PRIMARY KEY, msg STRING)");
});

app.listen({ port, host: '0.0.0.0' })
.catch(err => {
    logger.error(`ERROR! ${err}`);
    process.exit(1);
})
.then(_ => {
    logger.success(`Server running in port ${port}`)
});

