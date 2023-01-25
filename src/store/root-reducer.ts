import {AnyAction, combineReducers} from "redux"
import {salesReducer, SalesReducerState} from "@/store/Sales/sales.reducer";
import {HYDRATE} from "next-redux-wrapper";
import {NEW_COLLECTION_INITIAL_STATE_TYPE, NewCollectionReducer} from "@/store/newCollection/newCollection.reducer";

export type RootReducerType = {
    sales: SalesReducerState;
    newCollection: NEW_COLLECTION_INITIAL_STATE_TYPE
}

export const rootReducer =(state: RootReducerType | undefined, action: AnyAction) => {

    switch (action.type) {
        case HYDRATE:
            return action.payload
        default: {
            const combinedReducer = combineReducers({
                sales: salesReducer,
                newCollection: NewCollectionReducer
            })
            return combinedReducer(state, action);
        }
    }
};