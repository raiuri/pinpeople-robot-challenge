import { FunctionComponent } from "react";
import { Spring } from 'react-spring/renderprops.cjs';
import { RobotProps } from './types';
import { usePrevious } from "@react-yuki/hooks";
import { Coordinate } from "../../types";
import { createRobotTransition } from "../../utils";
import { RobotContainer } from "../styledComponents";

const Robot: FunctionComponent<RobotProps> = ({ coordinate, isPlaced, rotateDeg }) => {
    const prevCoordinate = usePrevious<Coordinate>(coordinate);
    const prevIsPlaced = usePrevious<boolean>(isPlaced);
    const prevRotateDeg = usePrevious<number>(rotateDeg);

    if (!isPlaced) return null;


    const { currentTransition, prevTransition } = createRobotTransition({
        prevIsPlaced,
        coordinate,
        prevCoordinate,
        rotateDeg,
        prevRotateDeg
    });

    return (
        <Spring from={{ ...prevTransition }} to={{ ...currentTransition }}>
            {props => (
                <RobotContainer style={props}>
                    <h1>X</h1>
                </RobotContainer>
            )}
        </Spring>
    )
}

export default Robot;