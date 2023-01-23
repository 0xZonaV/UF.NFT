import React, {FormEvent, useState} from "react";
import {defaultInputFields} from "@/constants";
import {defaultInputFieldsType, inputChangeHandlerType} from "../../../@types";
import TextFieldById, {TextFieldsProps} from "@/components/TextFiled/TextFieldsById.component";


export const onChangeHandler: inputChangeHandlerType = (event) => {
    const {name, value} = event.target;

    setInputFields({...inputFields, [name]:value})
}

const renderTextFields = TextFieldsProps.map(
    (element,index) =>{
        return(
            <TextFieldById
                idOfField={index}
                onChangeHandler={onChangeHandler}
                key={index}
                value={inputFields[element.name as keyof defaultInputFieldsType]}
            />
        )
    });

const inputValue = (id: number) => inputFields[TextFieldsProps[id].name as keyof defaultInputFieldsType]


const onClickHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputFields);

    const resetFields = () => {
        setInputFields(defaultInputFields);
    }

    resetFields();
}