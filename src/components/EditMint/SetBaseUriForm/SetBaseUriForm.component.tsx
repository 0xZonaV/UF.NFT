import {Grid, TextField} from "@mui/material";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import web3 from "@/ethereum/web3";
import collection from "@/ethereum/collection";
import SetBaseUriButton from "@/components/EditMint/SetBaseUriForm/SetBaseUriButton.component";


type SetBaseUriFormProps = {
    address: string;
}

const SetBaseUriForm:FC<SetBaseUriFormProps> = ({address}) => {
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
        <Grid item xs={12} component="form" onSubmit={onFormSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id="inputBaseUri"
                        name="inputBaseUri"
                        value={input}
                        onChange={onInputChange}
                        label="Paste Your Base Uri for Collection"
                        variant="filled"
                        required
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <SetBaseUriButton />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SetBaseUriForm;