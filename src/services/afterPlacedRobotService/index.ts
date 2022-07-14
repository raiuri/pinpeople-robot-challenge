import { RobotState } from "../../types";
import { afterPlacedRobot } from "../partials/prompts";
import axios from "axios";
import { moveRobotService } from "../moveRobotService";
import { robotState } from "../../constants";

export const afterPlacedRobotService = (prevState: RobotState, restartGame: Function): void => {
    afterPlacedRobot().then(async (state) => {
        switch (state.commandAfter) {
            case 'move': {
                moveRobotService(prevState, restartGame);
                break;
            }

            case 'reset': {
                await axios.put('http://localhost:3000/robotState/1', { ...robotState, placed: false });
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