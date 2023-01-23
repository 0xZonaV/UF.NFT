import {ChangeEvent} from "react";
import {defaultInputFields} from "@/constants";

export type Fetched = {
    image: string;
}

export type inputChangeHandlerType = {
    (event: ChangeEvent<HTMLInputElement>): void
}

export type TextFieldsPropsType = {
    name: string;
    id: string;
    label: string;
    defaultValue: string;
}

export type defaultInputFieldsType = {
    Name: string,
    MaxSupply: string,
    Symbol: string,
    Price: string,
    baseNFTUri: string,
    MaxPerTx: string,
    MaxPerWallet: string,
    TokensReserved: string
}
