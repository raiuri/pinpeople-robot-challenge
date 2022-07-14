export type Coordinate = { x: string, y: string };
export interface RobotState {
    commandAfter: string;
    id: 1,
    placed: boolean,
    coordinate: {
        x: string,
        y: string,
    },
    facing: string,
    commands: string,
};
