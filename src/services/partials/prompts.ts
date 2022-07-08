import { prompt, Prompt } from "enquirer";

export function startGame(): Promise<Prompt> {
  return prompt(
    {
      type: 'select',
      name: 'startGame',
      message: 'Do you like start a new game?',
      choices: ["YES", "NO"]
    },
  )
}

export function placeRobot(): Promise<Prompt> {
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

export function afterPlaceRobot() {
  return prompt(
    [
      {
        type: 'input',
        name: 'commandsAfter',
        message: 'type a valid command to place a robot on the table'
      },
    ]
  )
}