


import {all, call, put, takeLatest} from "typed-redux-saga/";
import {SALE_ACTION_TYPES} from "@/store/Sales/sales.types";
import {fetchSalesFailed, fetchSalesSuccess} from "@/store/Sales/sales.action";
import {AllSaleInfos} from "@/utils/getSalesArray.utils";

export function* fetchSalesAsync() {
    try {
        const fetchedArr = yield* call(AllSaleInfos)
        yield* put(fetchSalesSuccess(fetchedArr));
    } catch (error) {
        yield* put(fetchSalesFailed(error as Error));
    }
}


export function* onFetchSalesStart() {
    yield* takeLatest(SALE_ACTION_TYPES.FETCH_SALES_START, fetchSalesAsync);
}

export function* salesSaga() {
    yield* all([call(onFetchSalesStart)]);
}


