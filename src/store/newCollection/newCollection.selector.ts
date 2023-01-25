import {RootState} from "@/store/store";
import {NEW_COLLECTION_INITIAL_STATE_TYPE} from "@/store/newCollection/newCollection.reducer";
import {createSelector} from "reselect";

export const selectNewCollectionReducer = (state: RootState): NEW_COLLECTION_INITIAL_STATE_TYPE => state.newCollection;

export const selectNewCollectionFormInputs = createSelector(
    selectNewCollectionReducer,
    (newCollection) => newCollection.formInputs
)

export const selectNewCollectionError = createSelector(
    selectNewCollectionReducer,
    (newCollection) => newCollection.error
)
