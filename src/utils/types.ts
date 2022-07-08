import { RobotState } from "../types"

export type SplitCommand = (command: string) => string[];

export type Coordinate = { coordinate: { x: string, y: string } }

export type RobotMovePosition =
    (prevState: RobotState) => RobotState;

export type PreventBorderPass = (coordinate: Coordinate) => void; 