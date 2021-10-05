import React, { useEffect } from 'react'
import useTimeout from '../useTimeout/useTimeout'

//hooks that only complete action after user done with their input

function useDebounce(callback, delay, dependencies) {
    const {reset, clear} = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}

export default useDebounce
