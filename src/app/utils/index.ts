import { TABLE_DIMENSION } from "../config/constants";
import { GetSquareSize } from "./types";

export const arrayFromInterger = (range: number) => Array.from(Array(range).keys(), i => i);

export const getSquareSize: GetSquareSize = (type = 'x') => `${(1 / TABLE_DIMENSION[type]) * 100}%`;