import { Service } from "./types";
import { splitCommand } from '../utils';
import { placeRobot } from "./partials/prompts";
import { TABLE_DIMENSION } from "../constants";
import axios from "axios";

export const placeRobotService: Service = async (prevState, restartGame) => {

    placeRobot().then(async (state) => {

        const splitedCommand = splitCommand(state.commands);

        const coordinateX = parseInt(splitedCommand[1]);
        const coordinateY = parseInt(splitedCommand[2]);

        if (isNaN(coordinateX) || isNaN(coordinateY)) {
            console.log('The coordinates must be a number');
            
            restartGame();

        } else if (coordinateX < 0 || coordinateY < 0) {
            console.log('Coordinates cannot be less than 0');
            
            restartGame();

        } else if (coordinateX > TABLE_DIMENSION || coordinateY > TABLE_DIMENSION) {
            console.log('coordinates cannot be greater than 4');

        } else {
            const facing = splitedCommand[3].toLowerCase();
            const placed = prevState.placed = true;

            const newState = {
                ...prevState,
                placed,
                facing,
                coordinate: {
                    x: coordinateX,
                    y: coordinateY
                }
            };

            switch (facing) {
                case 'north':

                    await axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(() => {
                            console.log(state.commands);
                        }).catch(error => console.log(error));

                    restartGame()

                    break;

                case 'south':

                    await axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(() => {
                            console.log(state.commands);
                        }).catch(error => console.log(error));

                    restartGame()

                    break;

                case 'east':

                    await axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(() => {
                            console.log(state.commands);
                        }).catch(error => console.log(error));

                    restartGame()

                    break;

                case 'west':

                    await axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(() => {
                            console.log(state.commands);
                        }).catch(error => console.log(error));

                    restartGame()

                    break;

                default:
                    console.log('invalid direction');
                    console.log('Valide directions are, north | south | east | west');
                    restartGame();
            }
        }
    });
}