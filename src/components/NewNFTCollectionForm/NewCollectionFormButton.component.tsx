import {Button} from "@mui/material";
import React from "react";

const NewCollectionFormButton = () => {
    return(
        <Button
            type='submit'
            variant='contained'
            sx={{mt: 2}}
            fullWidth
        >
            Create new collection
        </Button>
    )
}

export default NewCollectionFormButton;