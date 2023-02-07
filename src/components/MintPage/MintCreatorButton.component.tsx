import {FC, Fragment} from "react";
import {Button, Grid} from "@mui/material";

type MintCreatorButtonType = {
    creatorAddress: string,
    userAddress: string,
    cAddress: string,
}

const MintCreatorButton: FC<MintCreatorButtonType> = ({creatorAddress, userAddress,cAddress}) => {

    if (userAddress === creatorAddress) {
        return(
            <Grid item xs={12}>
                <Button variant="outlined" href={`/sale/${cAddress}/creator`} style={{marginBottom: "10px"}}>
                    Edit Collection
                </Button>
            </Grid>
        )
    } else return (
        <Fragment>
        </Fragment>
    );
}

export default MintCreatorButton;