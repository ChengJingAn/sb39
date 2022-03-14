import React, { useState, useRef, useEffect, useContext } from 'react';
import Lottie from "react-lottie-segments";
import loadAnimation from '../utils/loadAnimation'

import "../stylesheets/styles.css";
import { UserContext } from '../components/BaseShot';
import BaseImage from '../components/BaseImage';
import { returnAudioPath } from '../components/CommonFunctions';

const animationList = []

new loadAnimation('main/leaf.json').then(result => {
    animationList[0] = result;
}, () => { });


new loadAnimation('main/gi.json').then(result => {
    animationList[1] = result;
}, () => { });


new loadAnimation('main/Sc05Gi.json').then(result => {
    animationList[2] = result;
}, () => { });

new loadAnimation('main/Sc05boy .json').then(result => {
    animationList[3] = result;
}, () => { });


new loadAnimation('main/sc03boy.json').then(result => {
    animationList[4] = result;
}, () => { });

let timerList = []
export default function Scene2({ nextFunc, _geo, _baseGeo, startTransition }) {

    const audioList = useContext(UserContext)


    const [speakingStop, setSpeakingStop] = useState(false)

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

            audioList.bodyAudio1.src = returnAudioPath('09')

            setSpeakingStop(true)

            timerList[0] = setTimeout(() => {
                setSpeakingStop(false)
                audioList.bodyAudio1.play();
                timerList[1] = setTimeout(() => {
                    setSpeakingStop(true)

                    timerList[2] = setTimeout(() => {
                        startTransition(3)
                        timerList[3] = setTimeout(() => {
                            nextFunc()
                            audioList.wooAudio.play();
                        }, 300);
                    }, 500);

                }, audioList.bodyAudio1.duration * 1000);
            }, 1000);



            return () => {
                audioList.bodyAudio1.pause()

                timerList.map(timer => {
                    clearTimeout(timer)
                })


            }
        }, []
    )


    return (
        <div className="aniObject">



            <div style={{
                position: "fixed", width: _baseGeo.width * 1 + "px",
                left: (0.0) + "px"
                , bottom: (_geo.height * -0.04) + "px",
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>

                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>


            <div
                style={{
                    position: "fixed", width: _geo.width * 1 + "px",
                    left: (_geo.width * 0.22 + _geo.left) + "px"
                    , bottom: (_geo.height * -0.04) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    speed={0.9}
                    isStopped={speakingStop}
                    isClickToPauseDisabled={true}
                />
            </div>


        </div>
    );
}
