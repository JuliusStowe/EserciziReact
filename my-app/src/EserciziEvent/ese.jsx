export function AlertClock(){
    function ClockButton(){
        const now = new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return (
        <div>
            <p>Click the button to know the date</p>
            <button onClick={ClockButton}>Click Me!</button>
        </div>
    )
}