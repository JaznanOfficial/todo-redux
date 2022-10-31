import { DINCREMENT } from "./actionTypes";
import { DDECREMENT } from "./actionTypes";

// action creator---------->

export const increment = (value) => {
    return {
        type: DINCREMENT,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DDECREMENT,
        payload: value,
    };
};