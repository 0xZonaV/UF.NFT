import {FC} from "react";
import {Typography} from "@mui/material";

type MintTitleProp = {
    name: string
}

const MintTitle: FC<MintTitleProp> = ({name}) => {
    return(
        <Typography component="h1" variant="h5" style={{marginBottom: "20px"}}>
            Mint {name} NFT
        </Typography>
    )
}

export default MintTitle;