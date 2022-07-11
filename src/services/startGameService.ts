import { placeRobot, startGame, afterPlaceRobot } from './partials/prompts'
import { preventBorderPass, splitCommand, robotMovePosition } from '../utils';
import { RobotState } from '../types';

export function startGameService() {

  const robotState: RobotState = {
    startGame: '',
    coordinate: {
      x: '',
      y: ''
    },
    facing: 'north',
    place: '',
  }

  startGame().then((res: any) => {

    robotState.startGame = res.startGame;

    if (robotState.startGame === 'YES') {

      placeRobot().then((res: any) => {
        const placeCommand = res.commands.toLowerCase();
        const splitedCommand = splitCommand(placeCommand);

        const coordinateX = parseInt(splitedCommand[1]);
        const coordinateY = parseInt(splitedCommand[2]);

        if (splitedCommand.length < 2 || splitedCommand.length > 4 || splitedCommand.length === 3) {
          console.log('Invalid command, Please inser a valid command');
          console.log('A valid example command is: place, 0, 0, NORTH');
          console.log('MOVE, LEFT, RIGHT');
        }

        if (splitedCommand[0] !== 'place') {
          console.log('Invalid command, type a correct commando to continue the game');
          console.log('A valid example command is: place, 0, 0, NORTH');

          startGameService()
        }

        if (coordinateX === NaN || coordinateY === NaN) {
          console.log('Invalid command, coordenates must be a number of 0 at 4');
          console.log('A valid example command is: place, 0, 2, SOUTH');

          startGame();
        }

        console.log(robotState);

        robotState.place = splitedCommand[0];
        robotState.coordinate.x = splitedCommand[1];
        robotState.coordinate.y = splitedCommand[2];
        robotState.facing = splitedCommand[3];

        console.log(robotState); // colocar esse console dentro do preventBorderPass;

        preventBorderPass(robotState);

        console.log(`
          Robot on table, at coordinates X ${robotState.coordinate.x} and Y ${robotState.coordinate.y}
          pointed to ${robotState.facing}
        `);

        afterPlaceRobot().then((state) => {
          console.log({ ...state, ...robotState});
          robotMovePosition(robotState);
        });

        // if (coordinateX < 0 || coordinateY < 0 || coordinateX > 4 || coordinateY > 4) {
        //   console.log('Invalid command, type a correct commando to continue the game');
        //   console.log('A valid example command is: place, 0, 0, NORTH');
        //   return startGame();
        // } else {
        //   robotState.place = splitedCommand[0];
        //   robotState.coordinate.x = splitedCommand[1];
        //   robotState.coordinate.y = splitedCommand[2];
        //   robotState.facing = splitedCommand[3];
        //   console.log(robotState);
        // }
      });
    } else {
      console.clear();
    }

  }).catch(
    console.error
  );
};