import { go, map, filter } from "fxjs";

export const square = (arr) => go(arr, map(num => num ** 2));

