import {FC} from "react";
import {TextField} from "@mui/material";
import {inputChangeHandlerType, TextFieldsPropsType} from "../../../@types";
import {defaultInputFields} from "@/constants";

export const TextFieldsProps: TextFieldsPropsType[] = [
    {
        name: "Name",
        id: "saleName",
        label: "UrFirst.NFT collection Name",
        defaultValue: defaultInputFields.Name
    },
    {
        name: "Symbol",
        id: "saleSymbol",
        label: "Collection Symbol",
        defaultValue: defaultInputFields.Symbol
    },
    {
        name: "MaxSupply",
        id: "saleSupply",
        label: "Collection Max Supply",
        defaultValue: defaultInputFields.MaxSupply
    },
    {
        name: "Price",
        id: "salePrice",
        label: "Price for mint 1 NFT in ETH",
        defaultValue: defaultInputFields.Price
    },
    {
        name: "baseNFTUri",
        id: "saleURI",
        label: "Base NFT URI for Collection",
        defaultValue: defaultInputFields.baseNFTUri
    },
    {
        name: "MaxPerTx",
        id: "saleMaxPerTx",
        label: "per 1 transaction",
        defaultValue: defaultInputFields.MaxPerTx
    },
    {
        name: "MaxPerWallet",
        id: "saleMaxPerWallet",
        label: "1 wallet",
        defaultValue: defaultInputFields.MaxPerWallet
    },
    {
        name: "TokensReserved",
        id: "saleTokensReserved",
        label: "Pre-Minted NFT count (Will be minted and send to your wallet)",
        defaultValue: defaultInputFields.TokensReserved
    }
    ];


type TextFieldProp = {
    idOfField: number;
    onChangeHandler: inputChangeHandlerType,
    value: string
}

const TextFieldById: FC<TextFieldProp> = ({idOfField, onChangeHandler, value}) => {
    const {name, id, label} = TextFieldsProps[idOfField];

    return (
        <TextField
            name={name}
            id={id}
            label={label}
            variant="outlined"
            required
            fullWidth
            onChange={onChangeHandler}
            sx={{ mt:1 }}
            value={value}
        />
    )
}

export default TextFieldById;