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


new loadAnimation('main/Sh05Bboy.json').then(result => {
    animationList[1] = result;
}, () => { });


new loadAnimation('main/Sh05BGi.json').then(result => {
    animationList[2] = result;
}, () => { });

new loadAnimation('main/Sh05Cleaf.json').then(result => {
    animationList[3] = result;
}, () => { });

let aniNumList = []

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

            audioList.bodyAudio1.src = returnAudioPath('06');
            aniNumList = []

            for (let i = 0; i < 4; i++)
                aniNumList[i] = playEnvirAni(generaterList.slice(i * 3 + 1, i * 3 + 3), 150)


            for (let i = 0; i < 4; i++)
                aniNumList[4 + i] = playEnvirAni(treeList[i], [500, 800, 600, 300][i])

            aniNumList[8] = playEnvirAni(windiList.slice(0, 3), 200)
            aniNumList[9] = playEnvirAni(windiList.slice(3, 6), 300)

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

                aniNumList.map(num => {
                    pauseEnvirAni(num)
                })

                audioList.bodyAudio1.pause()

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



                {Array.from(Array(12).keys()).map(value =>
                    <BaseImage
                        ref={generaterList[value]}
                        scale={[0.05, 0.07, 0.04, 0.035][parseInt(value / 3)]}
                        posInfo={{
                            l: [0.85, 0.75, 0.65, 0.45][parseInt(value / 3)],
                            t: [0.38, 0.32, 0.44, 0.49][parseInt(value / 3)]
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Wiend_Pole_01_Fan_" + (value % 3 + 1) + ".svg"}
                        className={value % 3 == 2 ? 'hideObject' : ''}
                    />)}

                {Array.from(Array(3).keys()).map(value =>
                    <BaseImage
                        ref={treeList[0][value]}
                        scale={0.15}
                        posInfo={{
                            l: [0.802, 0.8, 0.788][value],
                            t: [0.45, 0.45, 0.45][value]
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Tree_01_Frame_" + (value + 1) + ".svg"}
                        className={value > 0 ? 'hideObject' : ''}
                    />)}

                {Array.from(Array(3).keys()).map(value =>
                    <BaseImage
                        ref={treeList[3][value]}
                        scale={0.15}
                        posInfo={{
                            l: [0.102, 0.1, 0.088][value],
                            t: [0.43, 0.43, 0.43][value]
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Tree_01_Frame_" + (value + 1) + ".svg"}
                        className={value > 0 ? 'hideObject' : ''}
                    />)}


                {Array.from(Array(3).keys()).map(value =>
                    <BaseImage
                        ref={treeList[1][value]}
                        scale={0.3}
                        posInfo={{
                            l: [0.185, 0.179, 0.155][value],
                            t: [0.155, 0.155, 0.155][value]
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Tree_01_Frame_" + (value + 1) + ".svg"}
                        className={value > 0 ? 'hideObject' : ''}
                    />)}
                {Array.from(Array(5).keys()).map(value =>
                    <BaseImage
                        ref={treeList[2][value]}
                        scale={0.2}
                        posInfo={{
                            l: 0.495,
                            t: 0.21
                        }}
                        url={"Animation/Environ/SB39_Enviroment_BG_Tree_03_Frame_" + (value + 1) + ".svg"}
                        className={value > 0 ? 'hideObject' : ''}
                    />)}



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
                position: "fixed", width: _baseGeo.width * 0.3 + "px",
                left: (_baseGeo.width * 0.5 + _baseGeo.left) + "px"
                , bottom: (_baseGeo.bottom + _baseGeo.height * 0.2) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            {/* <div style={{
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
            </div> */}
            <div style={{
                position: "fixed", width: _baseGeo.width * 0.15 + "px",
                left: (_baseGeo.width * 0.2 + _baseGeo.left) + "px"
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
