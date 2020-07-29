import React, {ChangeEvent, useState} from "react";

type PropsType = {
    inputNewMinValue: number
    inputNewMaxValue: number
    onChangeMaxValue: (value:number) => void
    onChangeMinValue: (value: number) => void
    changeErrorStatus: (isError: boolean) => void
    error: boolean
}


export function SetValue(props: PropsType) {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>): void => {
        if (isNaN(+e.currentTarget.value)) return
        props.onChangeMaxValue(+e.currentTarget.value);
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>): void => {
        if (isNaN(+e.currentTarget.value)) return
        props.onChangeMinValue(+e.currentTarget.value);
    }

    console.log(props.error)

    return (
        <div className={"setup"}>
            <div>
                <span className={'label-input'}>Max Value</span>
                <input className={props.error ? 'input-error': ''}
                    type="text"
                    value={props.inputNewMaxValue}
                    onChange={onChangeMaxValue}
                /></div>
            <div>
                <span className={'label-input'}>Min Value</span>
                <input className={props.error ? 'input-error': ''}
                    type="text"
                    value={props.inputNewMinValue}
                onChange={onChangeMinValue}
                />
            </div>
        </div>
    )
}