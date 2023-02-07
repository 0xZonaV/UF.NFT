import {FC} from "react";
import {Grid, Typography} from "@mui/material";

type CurrentBaseUriProps = {
    baseUri: string;
}
const CurrentBaseUri: FC<CurrentBaseUriProps> = ({baseUri}) => {
    return(
        <Grid
            item
            xs={12}
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px"
            }}
        >
            <Typography noWrap variant="subtitle1">
                Current BaseUri: {baseUri}
            </Typography>
        </Grid>
    )
}

export default CurrentBaseUri;