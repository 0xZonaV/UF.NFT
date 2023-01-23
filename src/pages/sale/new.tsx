import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import React, {FormEvent, useState} from "react";
import {defaultInputFieldsType, inputChangeHandlerType, TextFieldsPropsType} from "../../../@types";
import TextFieldById, {TextFieldsProps} from "@/components/TextFiled/TextFieldsById.component";
import {defaultInputFields} from "@/constants";

const NewSalePage = () => {

    return(
        <div>
            <Container component="main" maxWidth="sm">
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




                     <Button
                        type='submit'
                        variant='contained'
                        sx={{mt: 2}}
                        fullWidth
                     >
                         Create new collection
                     </Button>
                 </Box>
            </Container>
        </div>
    )
}

export default NewSalePage;