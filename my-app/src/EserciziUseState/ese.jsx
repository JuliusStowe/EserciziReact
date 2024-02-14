import { useState } from "react";
export function Calculator(){
const [counter, setCounter]=useState(0)
function CounterUp(){
    setCounter(counter + 1)
}
function CounterDown(){
    setCounter(counter - 1)
}
function CounterReset(){
    setCounter(0)
}
return <div>
    <CounterDisplay counter={counter}/>
    <button onClick={CounterUp}>Incremenet</button>
    <button onClick={CounterDown}>decrement</button>
    <button onClick={CounterReset}>Reset</button>
</div>
}
export function CounterDisplay(counter){
    return  <h2>Counter: {counter}</h2>
}