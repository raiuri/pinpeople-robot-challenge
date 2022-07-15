import { BASE_URL } from "../constants";
import axios from "axios";

export const getState = async (): Promise<any> => {

    try {
        const data = await axios.get(BASE_URL);

        return data;

    } catch (error) {
        throw error;
    }
}