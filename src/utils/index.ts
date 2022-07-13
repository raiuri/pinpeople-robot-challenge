import { stringify } from "querystring";
import { Coordinate } from "../types";
import { SplitCommand } from "./types";

export const splitCommand: SplitCommand = (command) => command.split(/[\s,]+/);

const arrayFromInteger = (range: number) => Array.from(Array(range).keys(), i => i);


export const cordinateToInt = (coordinate: Coordinate) => {
    const coordinateX = coordinate.coordinate.x.replace(/[^0-9]/g, '');
    const coordinateY = coordinate.coordinate.y.replace(/[^0-9]/g, '');

    if (coordinateX === '' || coordinateY === '') {
        console.log('Coordinate X and Coordinate Y must be a number');

        return;
    };
    
    const x = parseInt(coordinateX);
    const y = parseInt(coordinateY);

    return { x, y };
}
