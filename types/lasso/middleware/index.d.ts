import { RequestHandler } from "express";
import Lasso from "../lib/Lasso";

export function serveStatic(options?: { lasso?: Lasso | undefined; sendOptions?: any }): RequestHandler;
