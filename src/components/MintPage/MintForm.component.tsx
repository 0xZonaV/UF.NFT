import {Grid, TextField, Typography} from "@mui/material";
import web3 from "@/ethereum/web3";
import collection from "@/ethereum/collection";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {SaleType} from "@/store/Sales/sales.types";
import MintButton from "@/components/MintPage/MintButton.component";

type MintButtonProps = {
    saleInfo: SaleType;
}

const MintForm: FC<MintButtonProps> = ({saleInfo}) => {

    const {Price, cAddress, isSaleActive, totalSupply, MaxSupply} = saleInfo;

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
            <Grid
                container
                component="form"
                autoComplete="off"
                onSubmit={MintNFT}
            >
                <Grid item xs={5}>
                    <TextField
                        id="quantityField"
                        name="quantity"
                        variant="outlined"
                        onChange={onInputChange}
                        style={{ width: "100%", height: "100%"}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <MintButton isSaleActive={isSaleActive} />
                </Grid>
                <Grid item xs={4}>
                    <Typography noWrap variant="h6" style={{marginTop: "10px"}}>
                        Price: {quantity ? web3.utils.fromWei(String(weiPrice * quantity), 'ether') : 0} ETH
                    </Typography>
                </Grid>
                <Grid item xs={8} style={{textAlign: "right"}}>
                    <Typography noWrap variant="h6" style={{marginTop: "10px"}}>
                        Minted: {totalSupply}/{MaxSupply}
                    </Typography>
                </Grid>
            </Grid>
    )
}



export default MintForm;