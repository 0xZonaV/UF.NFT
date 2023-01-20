import {all, call} from "typed-redux-saga/";
import {salesSaga} from "@/store/Sales/sales.saga";

export function* rootSaga() {
    yield* all([call(salesSaga)]);
}