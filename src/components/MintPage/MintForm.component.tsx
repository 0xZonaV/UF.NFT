import {Box, TextField, Typography} from "@mui/material";
import web3 from "@/ethereum/web3";
import collection from "@/ethereum/collection";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {SaleType} from "@/store/Sales/sales.types";
import MintButton from "@/components/MintPage/MintButton.component";

type MintButtonProps = {
    saleInfo: SaleType;
}

const MintForm: FC<MintButtonProps> = ({saleInfo}) => {

    const {Price, cAddress, isSaleActive} = saleInfo;

    const weiPrice = web3.utils.toWei(Price);

    const [quantity, setQuantity] = useState(0);

    const MintNFT = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        await collection(cAddress).methods
            .mint(quantity)
            .send({
                from: accounts[0],
                value: String(weiPrice * quantity)
            })
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    }

    return(
            <Box
                component="form"
                autoComplete="off"
                onSubmit={MintNFT}
                sx={{ marginTop: "20px" }}
            >
                <TextField
                    id="quantityField"
                    name="quantity"
                    variant="outlined"
                    onChange={onInputChange}
                    sx={{ width: "30%"}}
                />
                <MintButton isSaleActive={isSaleActive} />
                <Typography noWrap variant="overline">
                    Price: {quantity ? web3.utils.fromWei(String(weiPrice * quantity), 'ether') : 0} ETH
                </Typography>
            </Box>
    )
}



export default MintForm;