import { afterPlacedRobot } from "../partials/prompts";
import axios from "axios";
import { moveRobotService } from "./moveRobotService";
import { ROBOT_STATE } from "../constants";
import { Service } from "./types";

export const afterPlacedRobotService: Service = (prevState, restartGame) => {
    afterPlacedRobot().then(async (state) => {
        switch (state.commandAfter) {
            case 'move': {
                moveRobotService(prevState, restartGame);
                break;
            }

            case 'reset': {
                await axios.put('http://localhost:3000/robotState/1', { ...ROBOT_STATE, placed: false });
                restartGame();
                break;
            }

            case 'exit': {
                return;
            }

            default: {
                console.log('invalid command, Valid commands are: move | reset | exit');
                restartGame();
            }
        }

    });
}