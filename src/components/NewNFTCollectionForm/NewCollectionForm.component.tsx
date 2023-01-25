import React, {ChangeEvent, FormEvent, Fragment} from "react";
import {Box, Grid} from "@mui/material";
import TextFieldById from "@/components/NewNFTCollectionForm/TextFieldsById.component";
import {defaultInputFields} from "@/constants";
import {useDispatch, useSelector} from "react-redux";
import {createNewCollectionStart, onInputChange} from "@/store/newCollection/newCollection.action";
import {selectNewCollectionFormInputs} from "@/store/newCollection/newCollection.selector";
import NewCollectionFormButton from "@/components/NewNFTCollectionForm/NewCollectionFormButton.component";


const NewCollectionForm = () => {

    const dispatch = useDispatch();

    const resetInputValues = () => {
        dispatch(onInputChange(defaultInputFields))
    }

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        dispatch(onInputChange({...inputValue, [name]: value}))
    }

    const inputValue = useSelector(selectNewCollectionFormInputs);
    const onClickHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(createNewCollectionStart());

        resetInputValues();
    }


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
                            value={inputValue.Name}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFieldById
                            idOfField={1}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.Symbol}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFieldById
                            idOfField={3}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.Price}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFieldById
                            idOfField={2}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.MaxSupply}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldById
                            idOfField={4}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.baseNFTUri}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3.5} sx={{alignContent: "middle"}}>
                        How much can mint:
                    </Grid>
                    <Grid item xs={12} sm={4.25}>
                        <TextFieldById
                            idOfField={6}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.MaxPerWallet}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4.25}>
                        <TextFieldById
                            idOfField={5}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.MaxPerTx}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldById
                            idOfField={7}
                            onChangeHandler={onChangeHandler}
                            value={inputValue.TokensReserved}
                        />
                    </Grid>
                </Grid>
                <NewCollectionFormButton />
            </Box>
        </Fragment>
    )
}

export default NewCollectionForm;