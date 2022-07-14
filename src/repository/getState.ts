import axios, { AxiosResponse } from "axios";
import { RobotState } from "../types";

export const getState = async (): Promise<AxiosResponse<RobotState>> => {
    const data = await axios.get('http://localhost:3000/robotState/1');

    return data;
}