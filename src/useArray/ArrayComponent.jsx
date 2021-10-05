import React from 'react'
import useArray from './useArray'

function ArrayComponent() {

    const {array, set, push, remove, filter, update, clear} = useArray([1,2,3,4,5,6])

    return (
        <div>
            <div>{array.join(', ')}</div>
            <button onClick={() => push(7)} >Add 7</button>
            <button onClick={() => update(1, 9)} >Change 2nd element to 9</button>
            <button onClick={() => remove(1)} >Remove 2nd element</button>
            <button onClick={() => filter(n => n < 3)} >Keep no less than 4</button>
            <button onClick={() => set([1,2])} >Set to 1, 2</button>
            <button onClick={clear} >clear</button>
        </div>
    )
}

export default ArrayComponent
