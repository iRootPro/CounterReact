import React from "react";
import {Button} from "../Button";

type PropsType = {
    minValue: number
    maxValue: number
    setButtonHandler: (min: number, max: number) => void
    error: boolean
}

export function SetButton(props: PropsType) {

    const ButtonHandler = () => {
        props.setButtonHandler(props.minValue, props.maxValue);
    }


    return (
        <div className={'manage'}>
            <Button title={'SET'} disabled={props.error} callBackHandler={ButtonHandler}/>
        </div>
    )
}