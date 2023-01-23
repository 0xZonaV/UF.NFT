import {NewCollectionInputFieldsType} from "@/store/newCollection/newCollection.types";
import {SaleType} from "@/store/Sales/sales.types";
import {AnyAction} from "redux";
import {
    createNewCollectionStart,
    createNewCollectionSuccess,
    onInputChange
} from "@/store/newCollection/newCollection.action";

export type NEW_COLLECTION_INITIAL_STATE_TYPE = {
    readonly formInputs: NewCollectionInputFieldsType;
    readonly Sale: SaleType | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const NEW_COLLECTION_INITIAL_STATE: NEW_COLLECTION_INITIAL_STATE_TYPE = {
    formInputs: {
        Name: '',
        MaxSupply: '',
        Symbol: '',
        Price: '',
        baseNFTUri: '',
        MaxPerTx: '',
        MaxPerWallet: '',
        TokensReserved: ''
    },
    Sale: null,
    isLoading: false,
    error: null
}

export const NewCollectionReducer = (
    state = NEW_COLLECTION_INITIAL_STATE,
    action = {} as AnyAction
):NEW_COLLECTION_INITIAL_STATE_TYPE => {
    if (onInputChange.match(action)) {
        return {...state, formInputs: action.payload}
    }

    if(createNewCollectionStart.match(action)) {
        return {...state, isLoading: true}
    }

    if(createNewCollectionSuccess(action)) {
        return {...state, Sale: action.payload, isLoading: false}
    }


}
