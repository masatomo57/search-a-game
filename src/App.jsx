import { useState, useEffect, useCallback } from "react";
import { AButton } from "./components/a";

const startButtonStyle = {
    fontSize: "20px",
    outline: "none",
    background: "transparent",
    zIndex: "10000"
}

export const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(15);

    const onClickButton = useCallback(() => {
        setIsPlaying(true);
    }, []);
    
    const Timer = useCallback(() => {
        if (isPlaying && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isPlaying && time === 0) {
            alert("あーあ、じかんぎれ");
            setIsPlaying(false);
            setTime(15);
        };
    }, [isPlaying, time]);


    useEffect(() => {
        Timer();
    }, [Timer]);
    
    useEffect(() => {
        if (!isPlaying) {
            setTime(15);
        }
    }, [time]);

    
    return (
        <>
            <AButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <div>
                {time}
            </div>
            <button style={startButtonStyle} onClick={onClickButton}>{isPlaying ? "つかまえろ！" : "すたーと"}</button>
        </>
    );
};