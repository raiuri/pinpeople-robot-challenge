import { Service } from "./types";
import axios from "axios";
import { TABLE_DIMENSION } from "../constants";

export const moveRobotService: Service = async (prevState, restartGame) => {

    let coordinateX = parseInt(prevState.coordinate.x);
    let coordinateY = parseInt(prevState.coordinate.y);

    switch (prevState.facing) {

        case 'north':
            if (coordinateY <= 0) {

                console.log('The robot cannot go over the edge of the table');

                restartGame();

            } else {
                const { data } = await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: prevState.coordinate.x,
                        y: coordinateY - 1
                    }
                })
                
                console.log(`Current robot state: place, ${data.coordinate.x}, ${data.coordinate.y}, ${data.facing}`);

                restartGame();
            }

            break;

        case 'south':
            if (coordinateY >= TABLE_DIMENSION) {

                console.log('The robot cannot go over the edge of the table');

                restartGame();

            } else {
                const { data } = await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: prevState.coordinate.x,
                        y: coordinateY + 1
                    }
                })

                console.log(`Current robot state: place, ${data.coordinate.x}, ${data.coordinate.y}, ${data.facing}`);

                restartGame();
            }

            break;

        case 'east':

            if (coordinateX >= TABLE_DIMENSION) {
                console.log('The robot cannot go over the edge of the table');

                restartGame();
            } else {
                const { data } = await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: coordinateX + 1,
                        y: prevState.coordinate.y
                    }
                })

                console.log(`Current robot state: place, ${data.coordinate.x}, ${data.coordinate.y}, ${data.facing}`);

                restartGame();
            }

            break;

        case 'west':

            if (coordinateX <= 0) {
                console.log('The robot cannot go over the edge of the table');

                restartGame();
            } else {
                const { data } = await axios.put('http://localhost:3000/robotState/1', {
                    ...prevState, coordinate: {
                        x: coordinateX - 1,
                        y: prevState.coordinate.y
                    }
                })

                console.log(`Current robot state: place, ${data.coordinate.x}, ${data.coordinate.y}, ${data.facing}`);

                restartGame();
            }

            break;
    }
}