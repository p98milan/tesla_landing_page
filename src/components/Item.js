import React from 'react';
import "./Item.css";
import Button from "./Button";

const Item = ({ heading, img }) => {
    return (
        <div className='item' style={{backgroundImage: `url(${img})`}}>
            <div className="item-container">
                <div className="item-text">
                    <h1>{heading}</h1>
                </div>
                <div className="item-buttons">
                    <Button
                        text="Egyedi megrendelés"
                        bgColor="#4f4e4e"
                    />
                    <Button
                        text="Raktárkészlet"
                        bgColor="#fff"
                    />
                </div>
            </div>
        </div>
    )
}

export default Item