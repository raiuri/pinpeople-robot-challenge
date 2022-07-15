import { afterPlacedRobot } from "../partials/prompts";
import { moveRobotService } from "./moveRobotService";
import { ROBOT_STATE, AFTER_PLACE_COMMANDS } from "../constants";
import { Service } from "./types";
import { putState } from "../repository/putState";
import { getState } from "../repository/getState";

export const afterPlacedRobotService: Service = (prevState, restartGame) => {
    afterPlacedRobot().then(async (state) => {
        switch (state.commandAfter) {
            
            case AFTER_PLACE_COMMANDS.MOVE: {
                moveRobotService(prevState, restartGame);
                break;
            }

            case AFTER_PLACE_COMMANDS.REPORT: {
                const { data } = await getState();
                const report = data.commands;
                
                console.log(report);
                
                restartGame();
                break;
            }

            case AFTER_PLACE_COMMANDS.RESET: {
                await putState({ ...ROBOT_STATE, placed: false });
                restartGame();
                break;
            }

            case AFTER_PLACE_COMMANDS.EXIT: {
                return;
            }

            default: {
                console.log('invalid command, Valid commands are: move | reset | exit');
                
                restartGame();
            }
        }

    });
}