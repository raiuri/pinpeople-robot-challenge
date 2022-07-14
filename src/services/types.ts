import { RobotState } from "../types";

export type Service = (state: RobotState, restartGame: Function ) => void;