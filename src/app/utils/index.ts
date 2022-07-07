import { TABLE_DIMENSION } from "../config/constants";
import { GetSquareSize, CreateRobotTransition, GetTranslatePosition } from "./types";

export const arrayFromInterger = (range: number) => Array.from(Array(range).keys(), i => i);

export const getSquareSize: GetSquareSize = (type = 'x') => `${(1 / TABLE_DIMENSION[type]) * 100}%`;

export const getTranslatePosition: GetTranslatePosition = (coordinate) => {
    const { y } = TABLE_DIMENSION;

    if (!coordinate || coordinate === null) return `translate(0%, 0%)`;

    return `translate(${coordinate.x * 100}%, ${(y - (coordinate.y + 1)) * 100}%)`;
}

export const createRobotTransition: CreateRobotTransition = (params) => {
    const { coordinate, rotateDeg, prevCoordinate, prevIsPlaced, prevRotateDeg } = params;

    const scaleSize = prevIsPlaced ? '1' : '5';

    const deg = prevIsPlaced ? prevRotateDeg : rotateDeg;

    const translateCoordinate = prevIsPlaced ? prevCoordinate : coordinate;

    return {
        prevTransition: {
            transform: `${getTranslatePosition(
                translateCoordinate
            )} rotate(${deg}deg) scale(${scaleSize})`
        },
        currentTransition: {
            transform: `${getTranslatePosition(coordinate)} rotate(${rotateDeg}deg) scale(1)`
        }
    }
}