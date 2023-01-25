import {all, call} from "typed-redux-saga/";
import {salesSaga} from "@/store/Sales/sales.saga";
import {newCollectionSaga} from "@/store/newCollection/newCollection.saga";

export function* rootSaga() {
    yield* all([call(salesSaga), call(newCollectionSaga)]);
}