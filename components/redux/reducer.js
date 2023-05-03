// types
import { OPEN_MENU, CLOSE_MENU } from "./types";

let menuStatus = false

export const reducer = (state = menuStatus, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return state = true

        case CLOSE_MENU:
            return state = false
    
        default:
            return state
    }
}