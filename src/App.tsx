import React, {useState} from 'react';
import './App.css';
import {Output} from "./components/Output";
import {Button} from "./components/Button";
import {SetupCounter} from "./components/Setup/SetupCounter";

function App() {
    function saveState<T>(state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem('state', stateAsString)
    }

    let defaultState = {
        startValue: 0,
        maxValue: 0,
        currentValue: 0,
        isChange: false,
        isError: false
    }


    let [value, setValue] = useState(()=> {
        const savedState = localStorage.getItem('state')
        return savedState !== null ? JSON.parse(savedState) : defaultState
    })

    saveState(value)

    const incButton = () => {
        setValue({...value, currentValue: value.currentValue + 1})
    }

    const resetButton = () => {
        setValue({...value, currentValue: value.startValue})
    }

    const setButtonHandler = (min: number, max: number) => {
        setValue({...value, startValue: min, maxValue: max, currentValue: min, isChange: false})
    }

    const setIsChangeTrue = () => {
        setValue({...value, isChange: true})
    }

    const changeErrorStatus = (isError: boolean) => {
        setValue({...value, isError: isError})
    }

    return (

        <div className="wrapper">
            <div className="containerSetup">
                <SetupCounter setButtonHandler={setButtonHandler} setIsChangeTrue={setIsChangeTrue}
                              changeErrorStatus={changeErrorStatus} error={value.isError}/>
            </div>

            <div className="containerManager">
                <Output value={value.currentValue} maxValue={value.maxValue} isChange={value.isChange}
                        isError={value.isError}/>
                <div className={'manage'}>
                    <Button
                        callBackHandler={incButton}
                        value={value.currentValue}
                        maxValue={value.maxValue}
                        title={'INC'}
                        disabled={!(value.currentValue !== value.maxValue)}
                    />
                    <Button
                        callBackHandler={resetButton}
                        value={value.currentValue}
                        maxValue={value.maxValue}
                        title={'RESET'}
                        disabled={!(value.currentValue !== value.startValue)}
                    />
                </div>

            </div>
        </div>
    );
}

export default App;
