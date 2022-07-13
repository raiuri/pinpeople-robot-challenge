export type Coordinate = { coordinate: { x: string, y: string } };
export interface RobotState {
    id: 1,
    startedGame: string,
    placed: boolean,
    coordinate: {
        x: string,
        y: string,
    },
    facing: string,
    commands: string,
    splitedCommands: string[],
    commandAfter: string,
};
