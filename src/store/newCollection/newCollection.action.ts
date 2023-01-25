import {Action, ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {NEW_COLLECTION_ACTION_TYPES, NewCollectionInputFieldsType} from "@/store/newCollection/newCollection.types";

export type OnInputChange = ActionWithPayload<NEW_COLLECTION_ACTION_TYPES.ON_INPUT_CHANGE, NewCollectionInputFieldsType>;

export type CreateNewCollectionStart = Action<NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_START>;

export type CreateNewCollectionSuccess = ActionWithPayload<NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_SUCCESS, any>;

export type CreateNewCollectionFailed = ActionWithPayload<NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_FAILED, Error>;



export const onInputChange = withMatcher(
    (inputFields: NewCollectionInputFieldsType): OnInputChange => createAction(NEW_COLLECTION_ACTION_TYPES.ON_INPUT_CHANGE, inputFields)
);

export const createNewCollectionStart = withMatcher(
    ():CreateNewCollectionStart => createAction(NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_START)
);

export const createNewCollectionSuccess = withMatcher(
    (newCreatedCollection: any):CreateNewCollectionSuccess => createAction(NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_SUCCESS, newCreatedCollection)
);

export const createNewCollectionFailed = withMatcher(
    (error: Error):CreateNewCollectionFailed => createAction(NEW_COLLECTION_ACTION_TYPES.CREATE_NEW_COLLECTION_FAILED, error)
);


