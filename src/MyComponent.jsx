import { useState } from "react"

function MyComponent() {
  const [name, setName] = useState("Guest")
  const [age, setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("Lonewolf")
  }

  const incrementAge = () => {
    setAge(age + 1)
  }

  const toggleEmployed = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set Age</button>
        <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
        <button onClick={toggleEmployed}>Toggle</button>
      </div>
    </>
  )
}
export default MyComponent
