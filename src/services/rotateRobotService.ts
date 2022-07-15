import { putState } from '../repository/putState';
import { Service } from './types';
import { AFTER_PLACE_COMMANDS, DIRECTIONS, ROTATIONS } from '../constants';
import { getState } from '../repository/getState';

export const rotateRobotService: Service = async (prevState, restartGame) => {
    const { facing } = prevState;

    const { data } = await getState();

    switch (data.report) {

        case AFTER_PLACE_COMMANDS.LEFT: {

            if (facing === ROTATIONS.NORTH) {
                const newPosition = { ...prevState, facing: ROTATIONS.WEST };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();

            } else if (facing === ROTATIONS.SOUTH) {
                const newPosition = { ...prevState, facing: ROTATIONS.EAST };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();

            } else if (facing === ROTATIONS.EAST) {
                const newPosition = { ...prevState, facing: ROTATIONS.NORTH };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();

            } else if (facing === ROTATIONS.WEST) {
                const newPosition = { ...prevState, facing: ROTATIONS.SOUTH };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();
            }

            break;
        }

        case AFTER_PLACE_COMMANDS.RIGHT: {

            if (facing === ROTATIONS.NORTH) {
                const newPosition = { ...prevState, facing: ROTATIONS.EAST };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();

            } else if (facing === ROTATIONS.SOUTH) {
                const newPosition = { ...prevState, facing: ROTATIONS.WEST };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();

            } else if (facing === ROTATIONS.EAST) {
                const newPosition = { ...prevState, facing: ROTATIONS.SOUTH };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();

            } else if (facing === ROTATIONS.WEST) {
                const newPosition = { ...prevState, facing: ROTATIONS.NORTH };

                const result = await putState(newPosition);

                console.log(`The robot turned left and is now facing to ${result.facing}`);

                restartGame();
            }

            break;
        }
    }

}