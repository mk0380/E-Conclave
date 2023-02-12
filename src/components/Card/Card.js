import React from 'react';
import './card.css';

function Card() {

    return (
        <>
            <div class="card">
                <div class="glass"></div>

                <div class="line"></div>
                <div class="imagebox">
                    <img src="https://i.postimg.cc/h4H6QTFX/ad-01.webp" />
                </div>
                <div class="workshop">
                    <div class="details">
                        <h2>PYTHON PROGRAMMING</h2>
                        <div class="btn">
                            <button>Register</button>
                            <button>Explore</button>

                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Card;