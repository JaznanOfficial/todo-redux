import { initialState } from "./initialState";
import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED,
} from "./actionTypes";

const nextTodoId = (todo) => {
    const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                },
            ];

        case TOGGLED:
            return state.map((todo) => {
                if (todo.id !== action.type) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                };
            });

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload);
        case ALLCOMPLETED:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true,
                };
            });

        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed);

        default:
            break;
    }
};


export default reducer;