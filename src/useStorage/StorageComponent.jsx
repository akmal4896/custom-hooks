import React from 'react'
import { useLocalStorage, useSessionStorage } from './useStorage'

function StorageComponent() {

    const [name, setName, removeName] = useSessionStorage("name", "Kyle")
    const [age, setAge, removeAge] = useLocalStorage("age", 59)

    return (
        <div>
            <div>{name} - {age}</div>
            <button onClick={() => setName("John")} >Change Name</button>
            <button onClick={() => setAge(27)} >Change Age</button>
            <button onClick={removeName} >Remove Name</button>
            <button onClick={removeAge} >Remove Age</button>
        </div>
    )
}

export default StorageComponent
