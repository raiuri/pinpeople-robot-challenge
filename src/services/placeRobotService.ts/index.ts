import { GameStartService } from "../types";
import { splitCommand } from '../../utils';
import axios from "axios";
import { placeRobot } from "../partials/prompts";


export const placeRobotService: GameStartService = async (prevState, restartGame) => {

    placeRobot().then((state) => {

        const splitedCommand = splitCommand(state.commands);

        if (splitedCommand.length < 4 || splitedCommand.length > 4) {
            restartGame();
            return;
        };

        const coordinateX = parseInt(splitedCommand[1]);
        const coordinateY = parseInt(splitedCommand[2]);

        if (splitedCommand.length < 4) {
            console.log('Invalid command, Please insert a valid command');
            console.log('A valid example command is: place, 0, 0, north');
            restartGame();
        }
        else if (splitedCommand[0] !== 'place') {
            console.log('Invalid command, type a correct commando to continue the game');
            console.log('A valid example command is: place, 0, 0, north diferente de place');
            restartGame();
        }
        else if (coordinateX === NaN || coordinateY === NaN) {
            console.log('Invalid command, coordenates must be a number of 0 at 4');
            console.log('A valid example command is: place, 0, 2, SOUTH');
            restartGame();
        }
        else {
            const facing = splitedCommand[3].toLowerCase();
            const coordinateX = splitedCommand[1];
            const coordinateY = splitedCommand[2];
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

                    axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(resp => {
                            console.log(resp.data);
                        }).catch(error => console.log(error));

                    restartGame()

                    break;

                case 'south':

                    axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(resp => {
                            console.log(resp.data);
                        }).catch(error => console.log(error));

                    restartGame()

                    break;

                case 'east':

                    axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(resp => {
                            console.log(resp.data);
                        }).catch(error => console.log(error));
                    
                    restartGame()

                    break;

                case 'west':

                    axios.put('http://localhost:3000/robotState/1/', { ...newState })
                        .then(resp => {
                            console.log(resp.data);
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