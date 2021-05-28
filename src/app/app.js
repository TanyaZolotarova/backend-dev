import express, { Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { routes } from "./routes";

export function appService() {
  const app = express();

  app.use(cors());
  app.use([
    bodyParser.urlencoded({ parameterLimit: 10000, limit: '2mb', extended: true }),
    bodyParser.json({ limit: '2mb' }),
  ]);
  app.use(routes(Router({ caseSensitive: true })));
  const server = http.createServer(app);
  server.listen(Number(process.env.HTTP_PORT || 3000), () => {
    console.log(`Listening on ${server.address().port}`);
  });
}
