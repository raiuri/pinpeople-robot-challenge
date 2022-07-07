import * as CSS from 'csstype';
import { RobotState } from "../components/robot/types";
import { Coordinate } from "../types";

export type GetSquareSize = (type?: 'x' | 'y') => string;

export interface RobotTransitionParams extends Pick<RobotState, 'rotateDeg' | 'coordinate'> {
    prevRotateDeg?: number;
    prevIsPlaced?: boolean;
    prevCoordinate?: Coordinate;
};

export interface RobotTransition {
    prevTransition: CSS.Properties;
    currentTransition: CSS.Properties;
}

export type GetTranslatePosition = (coordinate?: Coordinate) => string;

export type CreateRobotTransition = (params: RobotTransitionParams) => RobotTransition;