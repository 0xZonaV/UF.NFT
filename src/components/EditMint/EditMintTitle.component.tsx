import {FC, Fragment} from "react";
import {Grid, Typography} from "@mui/material";

type TitleProps = {
    name: string
}

const EditMintTitleComponent: FC<TitleProps> = ({name}) => {
    return(
        <Fragment>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center"}}>
                <Typography variant="h5">Edit {name}</Typography>
            </Grid>
        </Fragment>
    )
}

export default EditMintTitleComponent;