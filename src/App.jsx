import { useState, useEffect } from "react";
import { AButton } from "./components/a";
import { Timer } from "./components/timer";



export const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(15);

    const onClickButton = () => {
        setIsPlaying(!isPlaying);
    };

    if (isPlaying) {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);
    };


    return (
        <>
            <div>
                <AButton />
            </div>
            <div>
                <Timer time={time} />
            </div>
            <button onClick={onClickButton}>{isPlaying ? "探せ！" : "スタート"}</button>
        </>
    );
};