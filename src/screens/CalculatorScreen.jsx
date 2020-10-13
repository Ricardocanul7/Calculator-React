import React from 'react'
import { useState } from 'react'
import { Display } from '../components/ui/Display'
import { Keyboard } from '../components/ui/Keyboard'
import './CalculatorScreen.scss'

export const CalculatorScreen = () => {

    const initNumber = {
        accumulator : 0,
        currentValue : 0
    };

    const initOperator = {
        prev : null,
        current : null
    };

    const [number, setNumber] = useState(initNumber);
    const [operator, setOperator] = useState(initOperator);
    const [on, setOn] = useState(true);

    const handleKeyPressed = (value) => {
        switch(value)
        {
            case 'ON':
                setOn(true);
                setNumber(initNumber);
                setOperator(initOperator);
                break;
            case 'OFF':
                setOn(false);
                setNumber({
                    ...number,
                    currentValue : ''
                });
                setOperator(initOperator);
                break;
            case 'AC':
                setNumber(initNumber);
                setOperator(initOperator);
                break;
            case 'DEL':
                setNumber({
                    ...number,
                    currentValue : 0,
                });
                break;
            case '+' : 
                if(operator.current === null){
                    if(number.currentValue !== 0 && on === true){
                        setNumber({
                            accumulator : (Number(number.accumulator) + Number(number.currentValue)),
                            currentValue : 0
                        })
                        setOperator({
                            prev: null,
                            current : '+'
                        });
                    }
                }else{
                    setOperator({
                        prev: null,
                        current : '+'
                    });
                }

                break;
            case '-' : 
                if(operator.current === null){
                    if(number.currentValue !== 0 && on === true){
                        setNumber({
                            accumulator : (Number(number.accumulator) + Number(number.currentValue)),
                            currentValue : 0
                        })
                        setOperator({
                            prev: null,
                            current : '-'
                        });
                    }
                }else{
                    setOperator({
                        prev: null,
                        current : '-'
                    });
                }

                break;
            case '/' : 
                if(operator.current === null){
                    if(number.currentValue !== 0 && on === true){
                        setNumber({
                            accumulator : (Number(number.accumulator) + Number(number.currentValue)),
                            currentValue : 0
                        })
                        setOperator({
                            prev: null,
                            current : '/'
                        });
                    }
                }else{
                    setOperator({
                        prev: null,
                        current : '/'
                    });
                }

                break;
            case 'X' : 
                if(operator.current === null){
                    if(number.currentValue !== 0 && on === true){
                        setNumber({
                            accumulator : (Number(number.accumulator) + Number(number.currentValue)),
                            currentValue : 0
                        })
                        setOperator({
                            prev: null,
                            current : '*'
                        });
                    }
                }else{
                    setOperator({
                        prev: null,
                        current : '*'
                    });
                }

                break;
            case '=' : 
                if(operator.current === '+' && on === true){
                    setNumber({
                        accumulator : 0,
                        currentValue : (Number(number.accumulator) + Number(number.currentValue)),
                    });
                    setOperator({
                        prev : '+',
                        current : null
                    })
                }
                if(operator.current === '-' && on === true){
                    setNumber({
                        accumulator : 0,
                        currentValue : (Number(number.accumulator) - Number(number.currentValue)),
                    });
                    setOperator({
                        prev : '-',
                        current : null
                    })
                }
                if(operator.current === '/' && on === true){
                    setNumber({
                        accumulator : 0,
                        currentValue : (Number(number.accumulator) / Number(number.currentValue)),
                    });
                    setOperator({
                        prev : '/',
                        current : null
                    })
                }
                if(operator.current === '*' && on === true){
                    setNumber({
                        accumulator : 0,
                        currentValue : (Number(number.accumulator) * Number(number.currentValue)),
                    });
                    setOperator({
                        prev : '*',
                        current : null
                    })
                }
                break;
            default :
                if(on === true)
                {
                    if(number.currentValue === 0){
                        setNumber({
                            ...number,
                            currentValue : value
                        });
                    }else{
                        setNumber({
                            ...number,
                            currentValue : (String(number.currentValue) + String(value))
                        });
                    }
                }
                break;
        }
    }

    return (
        <div className="cal-app">
            <h1 className="title">Calculator App</h1>
            <div className="cal-section">
                <div className="calculator-area">
                    <Display values={number.currentValue}/>
                    <Keyboard handleKeyPressed={handleKeyPressed}/>
                </div>
            </div>
        </div>
    )
}
