import React, {Fragment, useState} from "react";
import {Box, Grid} from "@mui/material";
import TextFieldById from "@/components/TextFiled/TextFieldsById.component";
import {defaultInputFields} from "@/constants";

const NewCollectionForm = () => {

    const [inputFields, setInputFields] = useState(defaultInputFields)

    return(
        <Fragment>
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            component='form'
            onSubmit={onClickHandler}
        >

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextFieldById
                        idOfField={0}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(0)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldById
                        idOfField={1}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(1)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldById
                        idOfField={3}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(3)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldById
                        idOfField={2}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(2)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldById
                        idOfField={4}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(4)}
                    />
                </Grid>
                <Grid item xs={12} sm={3.5} sx={{alignContent: "middle"}}>
                    How much can mint:
                </Grid>
                <Grid item xs={12} sm={4.25}>
                    <TextFieldById
                        idOfField={6}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(6)}
                    />
                </Grid>
                <Grid item xs={12} sm={4.25}>
                    <TextFieldById
                        idOfField={5}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(5)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldById
                        idOfField={7}
                        onChangeHandler={onChangeHandler}
                        value={inputValue(7)}
                    />
                </Grid>
            </Grid>
        </Box>
    </Fragment>
    )
}

export default NewCollectionForm;