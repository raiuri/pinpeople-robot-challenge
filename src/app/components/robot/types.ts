import { Facing, Coordinate } from '../../types';

export interface RobotState {
    isPlaced: boolean;
    facing: Facing;
    coordinate: Coordinate;
    rotateDeg: number;
    commands: string[];
    errorMessage: string;
}

export interface RobotProps extends Pick<RobotState, 'coordinate' | 'rotateDeg' | 'isPlaced'> { }