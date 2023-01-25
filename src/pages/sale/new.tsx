import {Container} from "@mui/material";
import React from "react";
import NewCollectionPageTitle from "@/components/NewNFTCollectionForm/NewCollectionPageTitle.component";
import NewCollectionForm from "@/components/NewNFTCollectionForm/NewCollectionForm.component";

const NewSalePage = () => {

    return(
        <div>
            <Container component="main" maxWidth="sm">
                <NewCollectionPageTitle />
                <NewCollectionForm />
            </Container>
        </div>
    )
}

export default NewSalePage;