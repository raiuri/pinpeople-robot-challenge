import { prompt } from "enquirer";
import { RobotState } from '../../types'

export function newGame(): Promise<RobotState> {
  return prompt(
    {
      type: 'select',
      name: 'startedGame',
      message: 'Do you like start a new game? ',
      choices: ["YES", "NO"]
    },
  )
}

export function placeRobot(): Promise<{ commands: string }> {
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