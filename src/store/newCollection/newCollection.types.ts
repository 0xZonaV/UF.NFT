export enum NEW_COLLECTION_ACTION_TYPES {
    ON_INPUT_CHANGE = "newCollection/ON_INPUT_CHANGE",
    CREATE_NEW_COLLECTION_START = "newCollection/CREATE_NEW_COLLECTION_START",
    CREATE_NEW_COLLECTION_SUCCESS = "newCollection/CREATE_NEW_COLLECTION_SUCCESS",
    CREATE_NEW_COLLECTION_FAILED = "newCollection/CREATE_NEW_COLLECTION_FAILED",
}

export type NewCollectionInputFieldsType = {
    Name: string,
    MaxSupply: string,
    Symbol: string,
    Price: string,
    baseNFTUri: string,
    MaxPerTx: string,
    MaxPerWallet: string,
    TokensReserved: string
}
