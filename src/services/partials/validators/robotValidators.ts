import { cordinateToInt } from "../../../utils";
import { PreventBorderPass, RobotMovePosition, GameStartService } from "../../types";

export const preventBorderPass: PreventBorderPass = ({ coordinate }, restartCommand) => {

    const convertedcoordinate = cordinateToInt({ coordinate });

    if (convertedcoordinate?.x !== undefined && convertedcoordinate?.x < 0) {
        console.log('Error, the robot position X cant\'t be a negative number');
        restartCommand();
    }

    if (convertedcoordinate?.x !== undefined && convertedcoordinate?.x > 4) {
        console.log('Error, the robot position X can\'t go beyond the limits of the table');
        restartCommand();
    }

    if (convertedcoordinate?.x !== undefined && convertedcoordinate?.x < 0) {
        console.log('Error, the robot position Y cant\'t be a negative number');
        restartCommand();
    }

    if (convertedcoordinate?.y !== undefined && convertedcoordinate?.y < 0) {
        console.log('Error, the robot position Y cant\'t be a negative number');
        restartCommand();
    }

    if (convertedcoordinate?.y !== undefined && convertedcoordinate?.y > 4) {
        console.log('Error, the robot position Y can\'t go beyond the limits of the table');
        restartCommand();
    }

    if (convertedcoordinate?.y !== undefined && convertedcoordinate?.y < 0) {
        console.log('Error, the robot position Y cant\'t be a negative number');
        restartCommand();
    }
};

export const robotMovePosition: RobotMovePosition = (prevState) => {
    switch (prevState.facing) {
        case 'east':
            const eastcoordinateX = parseInt(prevState.coordinate.x);
            const intEastCoordinateX = eastcoordinateX + 1;
            const newEastCoordinateX = intEastCoordinateX.toString();
            prevState.coordinate.x = newEastCoordinateX;

            if (parseInt(prevState.coordinate.x) > 4) {
                console.log('The robot can\'t move because it has reached the edge of the table')
            } else {                
                return { ...prevState, facing: prevState.facing, type: 'move_robot' }
            }

        case 'west':
            const weastCoordinateX = parseInt(prevState.coordinate.x);

            const intWestCoordinateX = weastCoordinateX - 1;

            const newWestCoordinateX = intWestCoordinateX.toString();

            prevState.coordinate.x = newWestCoordinateX;

            if (parseInt(prevState.coordinate.x) < 0) {
                console.log('The robot can\'t move because it has reached the edge of the table')
            } else {
                return { ...prevState }
            }
    }
}
