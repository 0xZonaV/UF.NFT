import {Typography} from "@mui/material";
import React from "react";

const NewCollectionPageTitle = () => {
    return(
        <Typography
            variant="h4"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 2
            }}
        >
            Create new Collection
        </Typography>
    )
}

export default NewCollectionPageTitle;