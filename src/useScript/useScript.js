import React from 'react'
import useAsync from '../useAsync/useAsync'

//hooks to dynamically load a script like jquery, stripe

function useScript(url) {
    return useAsync(() => {
        const script = document.createElement("script")
        script.src = url
        script.async = true

        return new Promise((resolve , reject) => {
            script.addEventListener("load", resolve)
            script.addEventListener("error", reject)
            document.body.appendChild(script)
        })
    }, [url])
}

export default useScript
