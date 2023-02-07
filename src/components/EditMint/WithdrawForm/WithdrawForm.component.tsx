import {Grid, InputAdornment, TextField} from "@mui/material";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import WithdrawButton from "@/components/EditMint/WithdrawForm/WithdrawButton.component";
import collection from "@/ethereum/collection";
import web3 from "@/ethereum/web3";

type WithdrawFormProps = {
    address: string;
}

const WithdrawForm: FC<WithdrawFormProps> = ({address}) => {

    const [input, setInput] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userAddress = await web3.eth.getAccounts();

        await collection(address).methods.withdrawAll().send({
                from: userAddress[0],
        });
    }

    return(
        <Grid item xs={8} component="form" onSubmit={onFormSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={7}>
                    <TextField
                    id="withdrawAmount"
                    name="withdrawAmount"
                    value={input}
                    onChange={onInputChange}
                    label="Amount to Withdraw"
                    variant="filled"
                    required
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ETH</InputAdornment>
                    }}
                    style={{
                      width: "100%",
                    }}
                />
                </Grid>
                <Grid item xs={5}>
                    <WithdrawButton />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WithdrawForm;