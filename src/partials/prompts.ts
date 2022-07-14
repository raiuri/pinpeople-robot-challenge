import { prompt } from "enquirer";
import { RobotState } from '../types'

export function placeRobot(): Promise<RobotState> {
  return prompt(
    [
      {
        type: 'input',
        name: 'commands',
        message: 'type a valid command to place a robot on the table'
      },
    ]
  )
}

export function afterPlacedRobot(): Promise<RobotState> {
  return prompt(
    [
      {
        type: 'input',
        name: 'commandAfter',
        message: 'What should the robot do now?'
      },
    ]
  )
}