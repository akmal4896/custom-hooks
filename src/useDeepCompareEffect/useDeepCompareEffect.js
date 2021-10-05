import isEqual  from 'lodash/fp/isEqual'
import React, { useEffect, useRef } from 'react'

//hooks that improve useEffect to make value comparison instead of object reference

function useDeepCompareEffect(callback, dependencies) {
    const currentDependenciesRef = useRef()

    if(!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies
    }

    useEffect(callback, [currentDependenciesRef.current])
}

export default useDeepCompareEffect
