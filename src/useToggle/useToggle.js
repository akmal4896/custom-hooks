import { useState } from 'react'

//hooks for toggling of boolean value
function useToggle(defaultValue) {

    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue(currentValue => typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}

export default useToggle
