import { useEffect, useState } from "react";

const Clock = () => {
    const date = new Date();
    // useEffect(() => {
    //     const setTime = setInterval(() => {
    //         setHour(date.getHours());
    //         setMinute(date.getMinutes());
    //         setSecond(date.getSeconds());
    //         console.log(second);
    //     }, 1000);
    //     return (()=> clearInterval(setTime))
    // }, []);

    return (
        <h1>{new Date().toLocaleTimeString()}</h1>
    );
}


export default Clock;