import axios from "axios";

export const putState = async(state: any) => {
    await axios.put('http://localhost:3000/robotState/1/', { state })
        .then(() => {
            console.log(state.commands);
        }).catch(error => console.log(error));
}