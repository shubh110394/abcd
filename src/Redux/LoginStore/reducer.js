import { loadData, saveData } from "../../utils/localStorage";
import { SUBMIT } from "./actionTypes";
const initState = {
    token: loadData("token")
}
export const loginreducer = (state=initState, { type, token }) => {
    switch (type) {
        case SUBMIT:
            saveData("token", token);
            return {
                ...state,token
            }
            
        
    
        default:
            return state;
    }
}