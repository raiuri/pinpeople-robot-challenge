import axios from "axios";
import { RobotState } from "../types";

export const putState = async (state: RobotState):Promise<RobotState> => {
    
    const { data } = await axios.put('http://localhost:3000/robotState/1/', state );

    return data;
}