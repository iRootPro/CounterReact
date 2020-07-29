import React from "react";

type PropsType = {
    value: number
    maxValue: number
    isChange: boolean
    isError: boolean
}

export function Output(props: PropsType) {
    return (
        <div className="output">

            {   props.isError ? <span className={'error-data'}>INCORRECT values</span> :
                props.isChange ?
                <span>enter values and press "SET"</span> :
                <span className={props.value === props.maxValue ? 'count-red' : 'count'}>{props.value}</span>}
        </div>
    )
}