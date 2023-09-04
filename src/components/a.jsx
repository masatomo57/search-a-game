import { useState } from "react";

const buttonStyle = {
    fontSize: "50px",
    border: "none",
    outline: "none",
    background: "transparent",
    zIndex: "10000"
};

const Width = window.innerWidth;
const Height = window.innerHeight;

export const AButton = (props) => {
    const {isPlaying, setIsPlaying} = props;
    const [position, setPosition] = useState({ x: Width/2, y: Height/2 });

    const onClickButton = () => {
        alert("あ、つかまっちゃった");
        setIsPlaying(false);
    }

    setTimeout(() => {
        const newX = Math.random() * Width * 0.9;
        const newY = Math.random() * Height* 0.9;
        setPosition({ x: newX, y: newY });
    }, 1000);

    const absoluteStyle = {
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`
    };

    return (
        <div style={absoluteStyle}>
            <button style={buttonStyle} onClick={onClickButton} disabled={!isPlaying}>あ</button>
        </div>
    );
};