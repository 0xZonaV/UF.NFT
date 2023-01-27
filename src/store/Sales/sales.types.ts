export enum SALE_ACTION_TYPES {
    FETCH_SALES_START = "sales/FETCH_SALES_START",
    FETCH_SALES_SUCCESS = "sales/FETCH_SALES_SUCCESS",
    FETCH_SALES_FAILED = "sales/FETCH_SALES_FAILED",
}


export type SaleType = {
    Name: string;
    MaxSupply: number;
    Symbol: string;
    Price: number;
    baseNFTUri: string;
    MaxPerTx: number;
    cAddress: string;
    creator: string;
    MaxPerWallet: number;
    isSaleActive: boolean;
    totalSupply: number;
};