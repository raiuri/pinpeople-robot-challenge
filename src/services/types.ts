import { Coordinate, RobotState } from "../types";

export type PreventBorderPass = (coordinate: Coordinate, restartCommand: Function) => void; 

export type RobotMovePosition =
    (prevState: RobotState) => RobotState | void;

export type GameStartService = (prevState: RobotState, restartGame: Function) => void;