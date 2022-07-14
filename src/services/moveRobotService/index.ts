import { RobotState } from "../../types";
import axios from "axios";

export async function moveRobotService(prevState: RobotState, restartGame: Function): Promise<void> {

    let coordinateX = parseInt(prevState.coordinate.x);
    let coordinateY = parseInt(prevState.coordinate.y);

    switch (prevState.facing) {

        case 'north':
            if (coordinateY <= 0) {

                console.log('The robot cannot go over the edge of the table');

                restartGame();

            } else {
                await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: prevState.coordinate.x,
                        y: coordinateY - 1
                    }
                })

                restartGame();
            }

            break;

        case 'south':
            if (coordinateY >= 4) {

                console.log('The robot cannot go over the edge of the table');

                restartGame();

            } else {
                await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: prevState.coordinate.x,
                        y: coordinateY + 1
                    }
                })

                restartGame();
            }

            break;

        case 'east':

            if (coordinateX >= 4) {
                console.log('The robot cannot go over the edge of the table');

                restartGame();
            } else {
                await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: coordinateX + 1,
                        y: prevState.coordinate.y
                    }
                })

                restartGame();
            }

            break;

        case 'west':

            if (coordinateX <= 0) {
                console.log('The robot cannot go over the edge of the table');

                restartGame();
            } else {
                await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: coordinateX - 1,
                        y: prevState.coordinate.y
                    }
                })

                restartGame();
            }

            break;
    }
}