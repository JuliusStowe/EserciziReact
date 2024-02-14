export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome <strong>{name}!</strong>
      </p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {name === "John" && age > 18 && age < 65 && <Age age={age} />}
    </div>
  );
}
export function Age({ age }) {
  return (
    <div>
      <p>Your age is {age}</p>
    </div>
  );
}
// export function Age({age,name}){
//     return <div>
//         {age>18 && <p>Your age is {age} (maggiore di 18)</p>}
//         {age<18 && <p>You are very young!</p>}
//     </div>
// }
