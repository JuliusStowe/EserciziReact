export function Welcome({name}){
    return <div>
            <p>Welcome <strong>{name}!</strong></p>
            {/* <p>Your age is {age}</p> */}
            <Age age={40}/>
            </div> 
}
export function Age({age}){
    return <p>Your age is {age}</p>
}