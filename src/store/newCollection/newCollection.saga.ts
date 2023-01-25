import {all, call, put, takeLatest} from "typed-redux-saga/";
import {NEW_COLLECTION_ACTION_TYPES} from "@/store/newCollection/newCollection.types";
import {createNewCollectionFailed, createNewCollectionSuccess} from "@/store/newCollection/newCollection.action";
import {createNewCollectionUtils} from "@/utils/createNewCollection.utils";


export function* createCollectionAsync() {
    try {
        const createdCollection = yield* call(createNewCollectionUtils);
        yield* put(createNewCollectionSuccess(createdCollection));
    } catch (error) {
        yield* put(createNewCollectionFailed(error as Error));
    }
}

export function* onNewCollection() {
    yield* takeLatest(NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_START, createCollectionAsync);
}

export function* newCollectionSaga() {
    yield* all([call(onNewCollection)]);
}