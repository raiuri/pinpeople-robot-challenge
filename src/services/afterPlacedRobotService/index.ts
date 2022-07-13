import { RobotState } from "../../types";
import { afterPlacedRobot } from "../partials/prompts";
import axios from "axios";
import { robotState } from "../../constants";

export const afterPlacedRobotService = (initialState: RobotState, restartGame: Function): void => {
    afterPlacedRobot().then(async (state) => {
        switch (state.commandAfter) {
            case 'move': {
                console.log('Move robot');
                restartGame();
                break;
            }

            case 'reset': {
                await axios.put('http://localhost:3000/robotState/1', { ...initialState, placed: false });
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