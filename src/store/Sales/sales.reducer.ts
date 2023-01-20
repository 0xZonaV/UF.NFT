import {SaleType} from "@/store/Sales/sales.types";
import {AnyAction} from "redux";
import {fetchSalesFailed, fetchSalesStart, fetchSalesSuccess} from "@/store/Sales/sales.action";

export type SalesReducerState = {
    readonly sales: SaleType[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const SALES_INITIAL_STATE: SalesReducerState = {
    sales: [],
    isLoading: false,
    error: null
};

export const salesReducer = (
    state = SALES_INITIAL_STATE,
    action= {} as AnyAction
): SalesReducerState => {
    if (fetchSalesStart.match(action)) {
        return {...state, isLoading: true};
    }

    if (fetchSalesSuccess.match(action)) {
        return {...state, sales: action.payload, isLoading: false};
    }

    if (fetchSalesFailed.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }

    return state;
};

