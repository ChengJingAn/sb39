import React, { useState, useRef, useEffect, useContext } from 'react';
import Lottie from "react-lottie-segments";
import loadAnimation from '../utils/loadAnimation'

import "../stylesheets/styles.css";
import { UserContext } from '../components/BaseShot';
import { returnAudioPath } from '../components/CommonFunctions';

const animationList = []

new loadAnimation('main/leaf.json').then(result => {
    animationList[0] = result;
}, () => { });


new loadAnimation('main/sh05ABoy.json').then(result => {
    animationList[1] = result;
}, () => { });


new loadAnimation('main/Sh05cat.json').then(result => {
    animationList[2] = result;
}, () => { });

let timerList = []

export default function Scene2({ nextFunc, _geo, _baseGeo }) {

    const audioList = useContext(UserContext)

    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: animationList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    useEffect(

        () => {

            audioList.bodyAudio1.src = returnAudioPath('05')
            timerList[0] = setTimeout(() => {
                audioList.bodyAudio1.play();
                timerList[1] = setTimeout(() => {
                    nextFunc();
                }, audioList.bodyAudio1.duration * 1000 + 2000);
            }, 2000);


            return () => {
                timerList.map(timer => {
                    clearTimeout(timer)
                })
                audioList.bodyAudio1.pause()
            }
        }, []
    )


    return (
        <div className="aniObject">

            <div style={{
                position: "fixed", width: _baseGeo.width * 1 + "px",
                left: (0.0) + "px"
                , bottom: (_geo.height * -0.01) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _baseGeo.width * 0.2 + "px",
                left: (_baseGeo.width * 0.3 + _baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.04) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _baseGeo.width * 0.2 + "px",
                left: (_baseGeo.width * 0.5 + _baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.02) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

        </div>
    );
}
