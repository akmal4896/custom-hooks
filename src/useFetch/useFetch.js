import React from 'react'
import useAsync from '../useAsync/useAsync';

//hooks for Fetch an endpoint 

const DEFAULT_OPTIONS = {
    headers: {"Content-Type": "application/json"}
}

function useFetch(url, options = {}, dependencies = []) {
    return useAsync(() => {
        return fetch(url, {...DEFAULT_OPTIONS, ...options}).then(res => {
            if(res.ok) return res.json();
            return res.json().then(json => Promise.reject(json)) //code for return error since fetch not return error
        })
    }, dependencies)
}

export default useFetch
