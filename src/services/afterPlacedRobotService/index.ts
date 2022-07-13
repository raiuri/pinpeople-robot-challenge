import { RobotState } from "../../types";
import { afterPlacedRobot } from "../partials/prompts";
import axios from "axios";
import { robotState } from "../../constants";

export const afterPlacedRobotService = async (prevState: RobotState, restartGame: Function): Promise<void> => {
    afterPlacedRobot().then((state) => {

        switch (state.commandAfter) {
            case 'move':
                console.log('Move robot');
                restartGame();
                break;

            case 'reset':
                axios.put('http://localhost:3000/robotState/1', { ...robotState });
                restartGame();
                break;

            case 'exit':
                return;
            default:
                console.log('invalid command, Valid commands are: move | reset | exit');
                restartGame();
        }
    });
}