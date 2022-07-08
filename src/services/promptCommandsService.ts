import { prompt, Prompt, } from 'enquirer';
import { splitCommand } from '../utils';

const commands = ['PLACE']; // colocar na pasta constants;
const coordinates = ['0', '1,', '2', '3', '4'];
const facing = ['NORTH', 'SOUTH', 'EAST', 'WEST'];

/*
  {
        type: 'select',
        name: 'coordinateX',
        message: 'Choice the robot position on Coordinate X',
        choices: coordinates,
      },
      {
        type: 'select',
        name: 'coordinateY',
        message: 'Choice the robot position on Coordinate Y',
        choices: coordinates,
      },
      {
        type: 'select',
        name: 'Facing',
        message: 'Choice the robot position on Coordinate Y',
        choices: facing,
      },
      {
        type: 'input',
        name: 'testeInput',
        message: 'Digite qualquer coisa'
      }
*/

export function PlaceRobot() {
  return prompt(
    [
      {
        type: 'input',
        name: 'place',
        message: 'type a valid command to place a robot on the table',
        choices: commands,
      },
    ]
  )
}

type Start = () => Promise<void>;

const startGame: Start = () => {
  return prompt(
    {
      type: 'select',
      name: 'startGame',
      message: 'Do you like start a new game?',
      choices: ["YES", "NO"]
    },
  )
}

type Response = { start: string };

export function promptCommandsService() {
  startGame().then((res: any) => {
    if (res.start !== 'YES') {
      console.clear();
      console.log('Leave');
    }

    PlaceRobot().then((res: any) => {
      const placeCommand = res.place.toLowerCase();
      const splitedCommand = splitCommand(placeCommand);

      if (splitedCommand.length < 1 || splitedCommand.length > 4) {
        console.log('Invalid command, Please inser a valid command');
        console.log('A valid example command is: place, 0, 0, NORTH');
        console.log('MOVE, LEFT, RIGHT');
      }

      if (splitedCommand[0] !== 'place') {
        console.log('Invalid command, type a correct commando to continue the game');
        console.log('A valid example command is: place, 0, 0, NORTH');
        return PlaceRobot();
      }

      const coordinateX = parseInt(splitedCommand[1]);
      const coordinateY = parseInt(splitedCommand[2]);

      if (!coordinateX || !coordinateY) {
        console.log('Invalid command, coordenates must be a number of 0 at 4');
        console.log('A valid example command is: place, 0, 2, SOUTH');
        return PlaceRobot();
      }

      if (coordinateX || coordinateY < 0 || coordinateX || coordinateY > 3) {
        console.log('Invalid command, type a correct commando to continue the game');
        console.log('A valid example command is: place, 0, 0, NORTH');
        return PlaceRobot();
      }
    });
  });
}

const robotActions = {
  command: 'PLACE '
}