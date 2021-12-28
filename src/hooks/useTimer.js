import React, { useState, useEffect } from 'react'



const useTimer = () => {
    const [time, setTime] = useState(60)
    const [launch, setLaunch] = useState(false)

    useEffect(() => {
        time == 0 ? setLaunch(false) : setLaunch(launch)
        time == 0 ? setTime(60) : setTime(time)
        if (launch) {
            let timer = setInterval(() => {
                setTime(time - 1)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [time, launch])
    return { time, launch, setTime, setLaunch }
}


export default useTimer 