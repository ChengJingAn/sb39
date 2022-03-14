import React, { useState, useRef, useEffect, useContext } from 'react';
import Lottie from "react-lottie-segments";
import loadAnimation from '../utils/loadAnimation'
import BaseImage from "../components/BaseImage"
import "../stylesheets/styles.css";
import { UserContext } from '../components/BaseShot';
import { playEnvirAni, pauseEnvirAni, returnAudioPath } from "../components/CommonFunctions"

const animationList = []

new loadAnimation('main/tree.json').then(result => {
    animationList[0] = result;
}, () => { });


new loadAnimation('main/Sh05CGi.json').then(result => {
    animationList[1] = result;
}, () => { });


new loadAnimation('main/sh05Cbo.json').then(result => {
    animationList[2] = result;
}, () => { });

new loadAnimation('main/Sh05Cleaf.json').then(result => {
    animationList[3] = result;
}, () => { });

let aniNumList = []
let nonLoopList = [1, 2]

let timerList = []

export default function Scene2({ nextFunc, _geo, _baseGeo }) {

    const audioList = useContext(UserContext)

    const generaterList = Array.from({ length: 12 }, ref => useRef())

    const windiList = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]
    const treeList = [
        [useRef(), useRef(), useRef()],
        [useRef(), useRef(), useRef()],
        [useRef(), useRef(), useRef(), useRef(), useRef()],
        [useRef(), useRef(), useRef()],

    ]

    function returnOption(index) {
        return {
            loop: nonLoopList.includes(index) ? 3 : true,
            autoplay: true,
            animationData: animationList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    useEffect(

        () => {

            audioList.bodyAudio1.src = returnAudioPath('07');

            aniNumList[0] = playEnvirAni(windiList.slice(0, 3), 200)
            aniNumList[1] = playEnvirAni(windiList.slice(3, 6), 300)

            timerList[0] = setTimeout(() => {
                audioList.bodyAudio1.play();
                timerList[1] = setTimeout(() => {
                    nextFunc();
                }, audioList.bodyAudio1.duration * 1000 + 2000);
            }, 2000);


            return () => {

                audioList.bodyAudio1.pause()

                
                timerList.map(timer => {
                    clearTimeout(timer)
                })

                aniNumList.map(num => {
                    pauseEnvirAni(num)
                })
            }
        }, []
    )


    return (
        <div className="aniObject">



            {/* clouds */}
            <div
                className='movingTopDown1'
                style={{
                    position: "fixed", width: _baseGeo.width * 0.2 + "px",
                    left: (_baseGeo.width * 0.7 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.top + _baseGeo.height * 0.8) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <img
                    draggable={false}
                    width={"100%"}
                    src={'./images/Animation/Other/SB39_Animation_Assets_SB39_Air_Cloud_01.svg'}
                />

            </div>
            <div
                className='movingTopDown1'
                style={{
                    position: "fixed", width: _baseGeo.width * 0.13 + "px",
                    left: (_baseGeo.width * 0.6 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.top + _baseGeo.height * 0.7) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <img
                    draggable={false}
                    width={"100%"}
                    src={'./images/Animation/Other/SB39_Animation_Assets_SB39_Air_Cloud_01.svg'}
                />

            </div>
            {/* ---clouds--- */}


            <div
                style={{
                    position: "fixed",
                    width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px",
                    left: _baseGeo.left + "px"
                    , top: _baseGeo.bottom + "px",
                }}>






                {Array.from(Array(3).keys()).map(value =>
                    <BaseImage
                        ref={windiList[value]}
                        scale={0.15}
                        posInfo={{
                            l: 0.495,
                            t: 0.15
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Water_Ripple_" + (value + 1) + ".svg"}
                        className={value > 0 ? 'hideObject' : ''}
                    />)}

                {Array.from(Array(3).keys()).map(value =>
                    <BaseImage
                        ref={windiList[value + 3]}
                        scale={0.1}
                        posInfo={{
                            l: 0.695,
                            t: 0.41
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Water_Ripple_" + (value + 1) + ".svg"}
                        className={value > 0 ? 'hideObject' : ''}
                    />)}

            </div>


            <div style={{
                position: "fixed", width: _baseGeo.width * 1 + "px",
                left: (_baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.1) + "px",
                overflow: 'hidden',
                pointerEvents: 'none',
                opacity: 0.7
            }}>

                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _baseGeo.width * 0.14 + "px",
                left: (_baseGeo.width * 0.5 + _baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.1) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div style={{
                position: "fixed", width: _baseGeo.width * 0.8 + "px",
                left: (_baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.1) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div style={{
                position: "fixed", width: _baseGeo.width * 0.12 + "px",
                left: (_baseGeo.width * 0.3 + _baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.1) + "px",
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
