import {Grid, Typography} from "@mui/material";
import {FC} from "react";

type BalanceProps = {
    balance: number;
}
const BalanceTitle: FC<BalanceProps> = ({balance}) => {
    return(
        <Grid
            item
            xs={12}
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Typography variant="subtitle1">Balance: {balance} ETH</Typography>
        </Grid>
    )
}

export default BalanceTitle;