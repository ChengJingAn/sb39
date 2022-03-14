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

            audioList.bodyAudio1.src = returnAudioPath('02')
            audioList.bodyAudio2.src = returnAudioPath('03')
            audioList.bodyAudio3.src = returnAudioPath('04')

            girlAniList[1].current.className = 'hideObject'
            boyAniList[1].current.className = 'hideObject'
            audioList.windAudio.play()

            timerList[0] = setTimeout(() => {
                boyAniList[0].current.className = 'hide'
                girlAniList[0].current.className = 'hide'

                setSpeakingStop(true)
                timerList[7] = setTimeout(() => {
                    boyAniList[1].current.className = 'show'
                    timerList[8] = setTimeout(() => {


                        setSpeakingStop(false)
                        audioList.bodyAudio1.play()

                        timerList[1] = setTimeout(() => {

                            boyAniList[1].current.className = 'hide'
                            setSpeakingStop(true)

                            timerList[2] = setTimeout(() => {
                                girlAniList[1].current.className = 'show'

                                timerList[9] = setTimeout(() => {

                                    setSpeakingStop(false)
                                    audioList.bodyAudio2.play()

                                    timerList[3] = setTimeout(() => {

                                        setSpeakingStop(true)
                                        girlAniList[1].current.className = 'hide'

                                        timerList[10] = setTimeout(() => {
                                            girlAniList[1].current.style.transform = 'translateX(' + _geo.width * -0.2 + 'px)'
                                            girlAniList[1].current.style.transition = 'none'

                                            timerList[11] = setTimeout(() => {

                                                girlAniList[1].current.style.transition = '0.5s'
                                                girlAniList[1].current.className = 'show'
                                                boyAniList[0].current.className = 'show'

                                                timerList[12] = setTimeout(() => {

                                                    setSpeakingStop(false)
                                                    audioList.bodyAudio3.play();

                                                    timerList[4] = setTimeout(() => {
                                                        setSpeakingStop(true)
                                                        timerList[5] = setTimeout(() => {
                                                            startTransition(2);

                                                            timerList[6] = setTimeout(() => {
                                                                nextFunc()
                                                                audioList.wooAudio.play()
                                                            }, 300);
                                                        }, 500);
                                                    }, audioList.bodyAudio3.duration * 1000);

                                                }, 1000);

                                            }, 100);
                                        }, 600);


                                    }, audioList.bodyAudio2.duration * 1000);
                                }, 1000);

                            }, 500);

                        }, audioList.bodyAudio1.duration * 1000);
                    }, 1000);
                }, 500);

            }, 5000);

            return () => {
                timerList.map(timer => {
                    clearTimeout(timer)
                })

                audioList.bodyAudio1.pause()
                audioList.bodyAudio2.pause()
                audioList.bodyAudio3.pause()
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
                    left: (_geo.width * 0.0 + _geo.left) + "px"
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
                    left: (_geo.width * 0.6 + _geo.left) + "px"
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
