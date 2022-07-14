import { RobotState } from './types';
import { placeRobotService } from './services/placeRobotService.ts';
import axios from 'axios';
import { afterPlacedRobotService } from './services/afterPlacedRobotService';
import { ROBOT_STATE } from './constants';

startGame();

async function startGame() {

  const request = await axios.get('http://localhost:3000/robotState/1');
  const data: RobotState = request.data;

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