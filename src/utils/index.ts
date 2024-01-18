import path from 'path';
import { fileURLToPath } from 'url';

export * from "./fx.js";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(path.join(__filename, "../../../"));
export const { log } = console;
