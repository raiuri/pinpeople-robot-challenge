import { PreventBorderPass, RobotMovePosition, SplitCommand } from "./types";
import { TABLE_DIMENSION } from "../constants";

export const splitCommand: SplitCommand = (command) => command.split(/[\s,]+/);

const arrayFromInteger = (range: number) => Array.from(Array(range).keys(), i => i);

export const preventBorderPass: PreventBorderPass = ({ coordinate }) => {

    const coordinateX = parseInt(coordinate.x);
    const coordinateY = parseInt(coordinate.y);

    if (typeof coordinateX !== 'number') {
        console.log('Error, the robot position X must be a number')
    }

    if (coordinateX < 0) {
        console.log('Error, the robot position X cant\'t be a negative number');
    }

    if (coordinateX > 0) {
        console.log('Error, the robot position X can\'t go beyond the limits of the table');
    }

    if (typeof coordinateY !== 'number') {
        console.log('Error, the robot position X must be a number')
    }

    if (coordinateY < 0) {
        console.log('Error, the robot position Y cant\'t be a negative number');
    }

    if (coordinateY > 0) {
        console.log('Error, the robot position Y can\'t go beyond the limits of the table');
    }
};

export const robotMovePosition: RobotMovePosition = (prevState) => {
    switch (prevState.facing) {
        case 'east':
            const coordinateX = parseInt(prevState.coordinate.x);
            const intCoordinateX = coordinateX + 1;
            const newCoordinateX = intCoordinateX.toString();
            prevState.coordinate.x = newCoordinateX;

            if (parseInt(prevState.coordinate.x) > 4) {
                console.log('The robot can\'t move because it has reached the edge of the table')
            } else {
                return { ...prevState }
            }

    }

    return { ...prevState }
}
