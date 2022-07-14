import { RobotState } from "../types";

export const TABLE_DIMENSION = 4;

export const AFTER_PLACE_COMMANDS = { RESET: 'reset', MOVE: 'move', EXIT: 'exit' };

export const ROBOT_STATE: RobotState = {
    id: 1,
    coordinate: {
      x: '',
      y: ''
    },
    facing: '',
    placed: false,
    commands: '',
    commandAfter: ''
  }