import { RobotState } from "../types";

export type PreventBorderPass = (coordinate: RobotState, restartCommand: Function) => void; 

export type RobotMovePosition = (prevState: RobotState) => RobotState | void;

export type GameStartService = (prevState: RobotState, restartGame: Function) => void;

export type Service = (state: RobotState, restartGame: Function ) => void;