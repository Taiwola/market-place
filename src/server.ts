import express from "express";
import { nextApp, nextHandler } from './next-utils';
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    // const payload = await getPayloadClient();
}

const createContext = ({
    req,
    res
}: trpcExpress.CreateExpressContextOptions) => ({
    req, res
});

export type ExpressContext = inferAsyncReturnType<typeof createContext>

app.use('api/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))

 app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
 })

start();