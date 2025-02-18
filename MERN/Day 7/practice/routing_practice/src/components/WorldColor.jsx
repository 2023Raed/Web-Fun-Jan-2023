import React from "react";
import { useParams } from "react-router-dom";

const WordColor = () => {
    const { word, txtColor, bgColor } = useParams();
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: txtColor,
                padding: "20px",
            }}
        >
            The number is: {word}
        </div>
    );
};

export default WordColor;
 