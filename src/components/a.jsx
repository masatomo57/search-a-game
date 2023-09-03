const buttonStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
};

export const AButton = () => {
    const onClickButton = () => {
        alert("発見！");
    };

    return (
            <button style={buttonStyle} onClick={onClickButton}>あ</button>
    );
};