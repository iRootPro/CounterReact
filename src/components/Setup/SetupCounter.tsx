import React, {ChangeEvent, useState} from "react";
import {SetButton} from "./SetButton";
import {SetValue} from "./SetValue";


type PropsType = {
    setButtonHandler: (min: number, max: number) => void
    setIsChangeTrue: () => void
    changeErrorStatus: (isError: boolean) => void
    error: boolean
}

export function SetupCounter(props: PropsType) {

    let [inputNewMinValue, setInputNewMinValue] = useState<number>(0)
    let [inputNewMaxValue, setInputNewMaxValue] = useState<number>(0)

    if (inputNewMinValue > inputNewMaxValue && props.error === false) props.changeErrorStatus(true)
    if(inputNewMinValue < inputNewMaxValue && props.error === true) props.changeErrorStatus(false)

    const onChangeMinValue = (value: number): void => {
        props.setIsChangeTrue();
        setInputNewMinValue(value);
    }

    const onChangeMaxValue = (value: number): void => {
        props.setIsChangeTrue();
        setInputNewMaxValue(value);
    }
    //
    return (
        <div>
            <SetValue
                inputNewMinValue={inputNewMinValue}
                inputNewMaxValue={inputNewMaxValue}
                onChangeMaxValue={onChangeMaxValue}
                onChangeMinValue={onChangeMinValue}
                changeErrorStatus={props.changeErrorStatus}
                error={props.error}
            />
            <SetButton maxValue={inputNewMaxValue} minValue={inputNewMinValue} setButtonHandler={props.setButtonHandler} error={props.error}/>
        </div>
    )
}