import React, { useEffect, useRef } from 'react'

//similar with useEffect hooks but not trigger at first render

function useUpdateEffect(callback, dependecies) {

    const firstRenderRef = useRef(true)

    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependecies)
}

export default useUpdateEffect
