import {Action, ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {SALE_ACTION_TYPES, SaleType} from "@/store/Sales/sales.types";


export type FetchSalesStart = Action<SALE_ACTION_TYPES.FETCH_SALES_START>;

export type FetchSalesSuccess = ActionWithPayload<SALE_ACTION_TYPES.FETCH_SALES_SUCCESS, SaleType[]>

export type FetchSalesFailed = ActionWithPayload<SALE_ACTION_TYPES.FETCH_SALES_FAILED, Error>




export const fetchSalesStart = withMatcher(
    (): FetchSalesStart => createAction(SALE_ACTION_TYPES.FETCH_SALES_START)
);

export const fetchSalesSuccess = withMatcher(
    (sales: SaleType[]): FetchSalesSuccess => createAction(SALE_ACTION_TYPES.FETCH_SALES_SUCCESS, sales)
);

export const fetchSalesFailed = withMatcher(
    (error: Error): FetchSalesFailed => createAction(SALE_ACTION_TYPES.FETCH_SALES_FAILED, error)
);


