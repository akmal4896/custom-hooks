import React, { useState } from 'react'
import usePrevious from './usePrevious'

function PreviousComponent() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Helli')
    const previousCount = usePrevious(count)

    return (
        <div>
            <div>{count} - {previousCount}</div>
            <div>{name}</div>
            <button onClick={() => setCount(c => c + 1)} >Increment</button>
            <button onClick={() => setName("John")} >Change Name</button>
        </div>
    )
}

export default PreviousComponent
