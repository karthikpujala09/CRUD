import React, { useEffect, useRef, useState } from 'react'
import VIDEO from "./video.mp4";
import App from '../App';
const RefExample = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef();
    let videoRef = useRef();
    console.log(videoRef);

    useEffect(() => {
        eleRef.current.style.color="crimson";
        eleRef.current.innerText = "React Ref"
    })

    let playORpause = () => {
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
    return (
        <div>
            <h1 ref={eleRef}>RefExample</h1>
            <video ref={videoRef} src={VIDEO}  width={300} height={500}></video>
            <button onClick={playORpause}> click me</button>
            
        </div>
    )
}


export default RefExample