import { stringify } from "querystring";
import { Coordinate } from "../types";
import { SplitCommand } from "./types";

export const splitCommand: SplitCommand = (command) => command.split(/[\s,]+/);

const arrayFromInteger = (range: number) => Array.from(Array(range).keys(), i => i);


export const cordinateToNumber = (coordinate: Coordinate) => {
    const coordinateX = coordinate.x.replace(/[^0-4]/g, 'string');
    const coordinateY = coordinate.y.replace(/[^0-4]/g, 'string');

    console.log('CABRUNCO', coordinateX, coordinateY, 'PESTE');

    if (coordinateX === 'string' || coordinateY === 'string') {
        console.log('Coordinate X and Coordinate Y must be a number');

        return;
    };

    const x = parseInt(coordinateX);
    const y = parseInt(coordinateY);

    return { x, y };
}
