import { SUBMIT } from "./actionTypes"

export const submit = (token) => {
    return {
        type: SUBMIT,
        token,
    }
}