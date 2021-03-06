import { RobotState } from "../types";

export const TABLE_DIMENSION = 4;

export const BASE_URL = "http://localhost:3000/robotState/1";

export const DIRECTIONS = ['north', 'south', 'east', 'west'];
export const ROTATIONS = { NORTH: 'north', SOUTH: 'south', EAST: 'east', WEST: 'west' }

export const AFTER_PLACE_COMMANDS = {
  RESET: 'reset',
  MOVE: 'move',
  EXIT: 'exit',
  REPORT: 'report',
  LEFT: 'left',
  RIGHT: 'right',
};

export const ROBOT_STATE: RobotState = {
  id: 1,
  coordinate: {
    x: '',
    y: ''
  },
  facing: '',
  placed: false,
  commands: '',
  commandAfter: '',
  report: '',
}