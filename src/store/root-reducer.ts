import {AnyAction, combineReducers} from "redux";
import {salesReducer, SalesReducerState} from "@/store/Sales/sales.reducer";
import {HYDRATE} from "next-redux-wrapper";

export type RootReducerType = {
    sales: SalesReducerState;
}

export const rootReducer =(state: RootReducerType | undefined, action: AnyAction) => {

    switch (action.type) {
        case HYDRATE:
            return action.payload
        default: {
            const combinedReducer = combineReducers({
                sales: salesReducer,
            })
            return combinedReducer(state, action);
        }
    }
};