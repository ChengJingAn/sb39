import "../stylesheets/styles.css";
import React, { useContext, useEffect } from 'react';
import { isMobile } from "react-device-detect";
import Lottie from "react-lottie";
import loadAnimation from '../utils/loadAnimation';
import { returnAudioPath } from "../components/CommonFunctions";
import { UserContext } from "../components/BaseShot"

const showSourceList = []
new loadAnimation('welldone/sh44w.json').then(result => {
    showSourceList[0] = result;
}, () => { });
new loadAnimation('welldone/sh44e01.json').then(result => {
    showSourceList[1] = result;
}, () => { });
new loadAnimation('welldone/sh44L01.json').then(result => {
    showSourceList[2] = result;
}, () => { });
new loadAnimation('welldone/sh44L02.json').then(result => {
    showSourceList[3] = result;
}, () => { });
new loadAnimation('welldone/sh44d.json').then(result => {
    showSourceList[4] = result;
}, () => { });
new loadAnimation('welldone/sh44O.json').then(result => {
    showSourceList[5] = result;
}, () => { });
new loadAnimation('welldone/sh44n.json').then(result => {
    showSourceList[6] = result;
}, () => { });
new loadAnimation('welldone/sh44e02.json').then(result => {
    showSourceList[7] = result;
}, () => { });

new loadAnimation('welldone/sh44eee.json').then(result => {
    showSourceList[8] = result;
}, () => { });

const timerList = [];

export default function Scene18({ nextFunc, _geo }) {

    const audioList = useContext(UserContext)

    useEffect(() => {



        audioList.bodyAudio1.src = returnAudioPath('23');
        audioList.bodyAudio2.src = returnAudioPath('22');

        if (isMobile) {
            audioList.bodyAudio1.volume = 0.5
            audioList.bodyAudio2.volume = 0.5
        }

        timerList[1] = setTimeout(() => {
            audioList.bodyAudio1.play();
            setTimeout(() => {
                audioList.bodyAudio2.play();
            }, audioList.bodyAudio1.duration * 1000 - 200);
        }, 1000);

        timerList[2] = setTimeout(() => {
            audioList.clapAudio.play();
            audioList.yeahAudio.play();
        }, 3000);

        timerList[0] = setTimeout(() => {
            nextFunc();
        }, 8000);

        return () => {
            audioList.clapAudio.pause();
            audioList.yeahAudio.pause();

            audioList.clapAudio.currentTime = 0;
            audioList.yeahAudio.currentTime = 0;

            audioList.bodyAudio1.volume = 1
            audioList.bodyAudio2.volume = 1

            for (let i = 0; i < timerList.length; i++)
                clearTimeout(timerList[i])
        }
    }, [])

    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    return (
        <div className='aniObjectDelay'>
            < div className="excellentText" style={{
                position: "fixed", width: _geo.width * 1.3 + "px",
                left: _geo.left - _geo.width * 0.15 + "px",
                top: _geo.top - _geo.height * 0.15 + "px"
            }}>
                <img width={"100%"}
                    src={"./images/BG/SB_37_Well-Done_BG_Sparkels.svg"}
                />
            </div>

            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.14 + "px",
                    left: _geo.left + _geo.width * 0.25 + "px",
                    top: _geo.top + _geo.height * 0.16 + "px"
                }}
            >


                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.07 + "px",
                    left: _geo.left + _geo.width * 0.40 + "px",
                    top: _geo.top + _geo.height * 0.23 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.09 + "px",
                    left: _geo.left + _geo.width * 0.48 + "px",
                    top: _geo.top + _geo.height * 0.17 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.09 + "px",
                    left: _geo.left + _geo.width * 0.58 + "px",
                    top: _geo.top + _geo.height * 0.17 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    left: _geo.left + _geo.width * 0.24 + "px",
                    top: _geo.top + _geo.height * 0.5 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    width: _geo.width * 0.11 + "px",
                    left: _geo.left + _geo.width * 0.36 + "px",
                    top: _geo.top + _geo.height * 0.54 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    left: _geo.left + _geo.width * 0.47 + "px",
                    top: _geo.top + _geo.height * 0.53 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(6)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div


                style={{
                    position: "fixed",
                    width: _geo.width * 0.1 + "px",
                    left: _geo.left + _geo.width * 0.6 + "px",
                    top: _geo.top + _geo.height * 0.53 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(7)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.08 + "px",
                    left: _geo.left + _geo.width * 0.71 + "px",
                    top: _geo.top + _geo.height * 0.42 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(8)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>





        </div>
    );
}
