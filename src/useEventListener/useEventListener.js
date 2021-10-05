import React, { useEffect, useRef } from 'react'

//hooks for check last event listener used

function useEventListener(eventType, callback, element = window) {

    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handler = e => callbackRef.current(e)
        element.addEventListener(eventType, handler)

        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element]);
}

export default useEventListener
