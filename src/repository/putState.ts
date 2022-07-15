import axios from "axios";
import { BASE_URL } from "../constants";
import { RobotState } from "../types";

export const putState = async (state: RobotState): Promise<RobotState> => {

    try {
        const { data } = await axios.put(BASE_URL, state);

        return data;
        
    } catch (error) {
        throw error;
    }
}