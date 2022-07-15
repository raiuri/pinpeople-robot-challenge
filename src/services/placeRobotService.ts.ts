import { Service } from "./types";
import { splitCommand } from '../utils';
import { placeRobot } from "../partials/prompts";
import { TABLE_DIMENSION, DIRECTIONS } from "../constants";
import { putState } from "../repository/putState";
import { RobotState } from "../types";

export const placeRobotService: Service = async (prevState, restartGame) => {

    const state = await placeRobot();

    const splitedCommand = splitCommand(state.commands);

    const coordinateX = parseInt(splitedCommand[1]);
    const coordinateY = parseInt(splitedCommand[2]);

    if (splitedCommand[0] !== 'place') {
        console.log('invalid command');
        console.log('Valid command example is: place, 0, 0, south')

        restartGame();

    } else if (isNaN(coordinateX) || isNaN(coordinateY)) {
        console.log('The coordinates must be a number');

        restartGame();

    } else if (coordinateX < 0 || coordinateY < 0) {
        console.log('Coordinates cannot be less than 0');

        restartGame();

    } else if (coordinateX > TABLE_DIMENSION || coordinateY > TABLE_DIMENSION) {
        console.log('coordinates cannot be greater than 4');

    } else {
        const coordinateXstr = coordinateX.toString();
        const coordinateYstr = coordinateX.toString();

        const facing = splitedCommand[3].toLowerCase().trim();
        const placed = prevState.placed = true;

        const newState: RobotState = {
            ...prevState,
            placed,
            facing,
            coordinate: {
                x: coordinateXstr,
                y: coordinateYstr
            }
        };

        const checkFacing = DIRECTIONS.find((direction) => { return direction === facing });

        if (checkFacing) {

            putState(newState);

            restartGame()
        } else {
            console.log('invalid direction');
            console.log('Valide directions are, north | south | east | west');

            restartGame();
        }
    }
}