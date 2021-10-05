import React, { useState } from 'react'
import useEventListener from '../useEventListener/useEventListener'

//hooks that use eventListener hooks to get window size

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth, 
        height: window.innerHeight,
    })

    useEventListener("resize", () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
    })

    return windowSize
}

export default useWindowSize
