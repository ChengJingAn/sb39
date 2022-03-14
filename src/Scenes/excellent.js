import React, { useContext, useEffect } from 'react';
import "../stylesheets/styles.css";
import Lottie from "react-lottie-segments";

import loadAnimation from '../utils/loadAnimation'
import { UserContext } from '../components/BaseShot';

let aniDatas = []
new loadAnimation('excellent/sh24e.json').then(result => {
    aniDatas[0] = result;
}, () => { });
new loadAnimation('excellent/sh24X.json').then(result => {
    aniDatas[1] = result;
}, () => { });
new loadAnimation('excellent/sh24c.json').then(result => {
    aniDatas[2] = result;
}, () => { });
new loadAnimation('excellent/sh24e2.json').then(result => {
    aniDatas[3] = result;
}, () => { });
new loadAnimation('excellent/sh24l.json').then(result => {
    aniDatas[4] = result;
}, () => { });
new loadAnimation('excellent/sh24l.json').then(result => {
    aniDatas[5] = result;
}, () => { });
new loadAnimation('excellent/sh24E3.json').then(result => {
    aniDatas[6] = result;
}, () => { });
new loadAnimation('excellent/sh24n.json').then(result => {
    aniDatas[7] = result;
}, () => { });
new loadAnimation('excellent/sh24t.json').then(result => {
    aniDatas[8] = result;
}, () => { });
new loadAnimation('excellent/sh24ccc.json').then(result => {
    aniDatas[9] = result;
}, () => { });

let timer4
export default function Scene18({ nextFunc, _geo }) {
    const audioList = useContext(UserContext)

    useEffect(() => {

        const timer2 = setTimeout(() => {
            audioList.yeahAudio.play();
            audioList.clapAudio.play();
        }, 2000);

        const timer3 = setTimeout(() => {
            audioList.backAudio.volume = 0.07;
            audioList.replayAudio.play();

            timer4 = setTimeout(() => {
                audioList.backAudio.volume = 0.14
            }, audioList.replayAudio.duration * 1000);
        }, 5500);

        return () => {
            clearTimeout(timer2);
            clearTimeout(timer3);

            audioList.backAudio.volume = 0.14;

            audioList.replayAudio.pause();
            audioList.replayAudio.currentTime = 0

            audioList.yeahAudio.pause();
            audioList.clapAudio.pause();
            audioList.bodyAudio1.pause();

            audioList.yeahAudio.currentTime = 0;
            audioList.clapAudio.currentTime = 0;
        }
    }, [])

    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: aniDatas[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    return (
        <div className='aniObjectDelay'>
            <div className='excellentText' style={{
                position: "fixed", width: _geo.width * 1 + "px"
                , left: _geo.left - _geo.width * 0 + "px",
                top: _geo.top - _geo.height * 0 + "px",
                overflow: 'hidden'
            }}>
                <img draggable={false} width={"100%"}
                    src={"./images/Prop interactive/SB08_Excellent_Particles.svg"}
                />
            </div>
            <div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.11 + "px"
                    , left: _geo.left + _geo.width * 0.09 + "px",
                    top: _geo.top + _geo.height * 0.35 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(6)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.11 + "px"
                    , left: _geo.left + _geo.width * 0.18 + "px",
                    top: _geo.top + _geo.height * 0.45 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(1)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.11 + "px"
                    , left: _geo.left + _geo.width * 0.28 + "px",
                    top: _geo.top + _geo.height * 0.45 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(2)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div style={{
                    position: "fixed", width: _geo.width * 0.11 + "px"
                    , left: _geo.left + _geo.width * 0.37 + "px",
                    top: _geo.top + _geo.height * 0.45 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(3)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.09 + "px"
                    , left: _geo.left + _geo.width * 0.46 + "px",
                    top: _geo.top + _geo.height * 0.32 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(4)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.09 + "px"
                    , left: _geo.left + _geo.width * 0.51 + "px",
                    top: _geo.top + _geo.height * 0.32 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(5)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.11 + "px"
                    , left: _geo.left + _geo.width * 0.58 + "px",
                    top: _geo.top + _geo.height * 0.46 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(0)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.11 + "px"
                    , left: _geo.left + _geo.width * 0.67 + "px",
                    top: _geo.top + _geo.height * 0.45 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(7)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.09 + "px"
                    , left: _geo.left + _geo.width * 0.78 + "px",
                    top: _geo.top + _geo.height * 0.39 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(8)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div style={{
                    position: "fixed", width: _geo.width * 0.06 + "px"
                    , left: _geo.left + _geo.width * 0.86 + "px",
                    top: _geo.top + _geo.height * 0.39 + "px",
                }}>
                    <Lottie autoplay loop options={returnOption(9)}
                        mouseDown={false}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>

            <div
                className='commonButton'
                onClick={() => { setTimeout(nextFunc, 200);  }}
                style={{
                    position: "fixed", width: _geo.width * 0.08 + "px",
                    height: _geo.width * 0.08 + "px",
                    left: _geo.left + _geo.width * 0.45
                    , bottom: '5%'
                    , cursor: "pointer",
                    overflow: 'hidden',
                    // backgroundColor:'black',
                    userSelect: 'none',
                }}>
                <img
                    width={"100%"}
                    draggable={false}
                    src={'./images/Buttons/Replay_Blue.svg'}
                />
            </div>
        </div >
    );
}
