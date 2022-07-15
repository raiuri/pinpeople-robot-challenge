import { placeRobotService } from './services/placeRobotService.ts';
import { afterPlacedRobotService } from './services/afterPlacedRobotService';
import { ROBOT_STATE } from './constants';
import { getState } from './repository/getState';

startGame();

async function startGame() {

  const { data } = await getState();

  switch (data.placed) {

    case true:
      afterPlacedRobotService(data, startGame);
      break;

    case false:
      placeRobotService(ROBOT_STATE, startGame);
      break;

    default:
      console.log('Invalid initial robotState');

  }
}