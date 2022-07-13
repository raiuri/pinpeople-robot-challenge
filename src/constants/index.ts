import { RobotState } from "../types";

export const robotState: RobotState = {
    id: 1,
    startedGame: '',
    coordinate: {
      x: '',
      y: ''
    },
    facing: '',
    placed: false,
    commandAfter: '',
    splitedCommands: [],
    commands: ''
  }