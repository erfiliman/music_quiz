import React, {useState, useEffect, useRef} from "react";


const Player = ({ url }) => {
    const audio = useRef();

    useEffect(()=>{
        audio.current.pause();
    	audio.current.load();
    	const promise = audio.current.play();
    	if (promise !== undefined) {
    		promise
    			.then(() => {
    			})
    			.catch(error => {
    				console.log(error);
    			});
    	}
    }, [url])

    return (
        <div className="music-player">
            <audio ref={audio}>
                <source src={url} />
            </audio>
        </div>
    );
};

export default Player