import React, { useState, useRef, useEffect, useContext } from 'react';
import Lottie from "react-lottie-segments";
import loadAnimation from '../utils/loadAnimation'
import { returnAudioPath } from "../components/CommonFunctions"
import "../stylesheets/styles.css";
import { UserContext } from '../components/BaseShot';

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

    const boyAniList = [useRef(), useRef()]
    const girlAniList = [useRef(), useRef()]

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

            audioList.windAudio.pause();
            audioList.windAudio.currentTime = 0;

            audioList.bodyAudio1.src = returnAudioPath('18')
            audioList.bodyAudio2.src = returnAudioPath('19')
            setTimeout(() => {
                setSpeakingStop(true)    
            }, 10);
            

            girlAniList[1].current.className = 'hideObject'
            girlAniList[0].current.className = 'hideObject'

            boyAniList[0].current.className = 'hideObject'
            boyAniList[1].current.className = 'showObject'


            timerList[0] = setTimeout(() => {
                setSpeakingStop(false)
                audioList.bodyAudio1.play()

                timerList[1] = setTimeout(() => {

                    boyAniList[1].current.className = 'hide'
                    boyAniList[0].current.className = 'hide'

                    setSpeakingStop(true)

                    girlAniList[0].current.className = 'hideObject'
                    girlAniList[1].current.className = 'show'

                    timerList[2] = setTimeout(() => {
                        setSpeakingStop(false)
                        audioList.bodyAudio2.play()



                        timerList[3] = setTimeout(() => {

                            setSpeakingStop(true)
                            timerList[4] = setTimeout(() => {
                                startTransition(2);
                                timerList[5] = setTimeout(() => {
                                    nextFunc()
                                    audioList.wooAudio.play()
                                }, 300);
                            }, 500);

                        }, audioList.bodyAudio2.duration * 1000);
                    }, 400);

                }, audioList.bodyAudio1.duration * 1000);

            }, 2000);

            return () => {
                timerList.map(timer => {
                    clearTimeout(timer)
                })
                audioList.windAudio.pause();
                audioList.windAudio.currentTime = 0;
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



            <div
                ref={girlAniList[0]}
                style={{
                    position: "fixed", width: _geo.width * 0.9 + "px",
                    left: (_geo.width * 0.2 + _geo.left) + "px"
                    , bottom: (_geo.height * -0.04) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                ref={girlAniList[1]}
                style={{
                    position: "fixed", width: _geo.width * 0.9 + "px",
                    left: (_geo.width * 0.22 + _geo.left) + "px"
                    , bottom: (_geo.height * -0.04) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isStopped={speakingStop}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div
                ref={boyAniList[0]}
                style={{
                    position: "fixed", width: _geo.width * 0.3 + "px",
                    left: (_geo.width * 0.4 + _geo.left) + "px"
                    , bottom: (_geo.height * -0.04) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div
                ref={boyAniList[1]}
                style={{
                    position: "fixed", width: _geo.width * 0.445 + "px",
                    left: (_geo.width * 0.29 + _geo.left) + "px"
                    , bottom: (_geo.height * -0.04) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>

                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isStopped={speakingStop}
                    isClickToPauseDisabled={true}
                />
            </div>
        </div>
    );
}
