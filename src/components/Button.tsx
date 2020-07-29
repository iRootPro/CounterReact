import React from "react";

type PropsType = {
    title: string
    callBackHandler: () => void
    value?: number
    maxValue?: number
    disabled: boolean
}

export function Button(props: PropsType) {
    return (
            <button
                className="btn"
                onClick={() => props.callBackHandler()}
                disabled={props.disabled}
            >{props.title}
            </button>
    )
}