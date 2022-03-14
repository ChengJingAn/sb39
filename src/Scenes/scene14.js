import React, { useContext, useEffect, useRef } from 'react';
import BaseProp from '../components/BaseProp';
import BaseImage from '../components/BaseImage';
import loadSound from '../utils/loadSound';
import "../stylesheets/styles.css";
import { prePathUrl, returnAudioPath, setRepeatAudio, startRepeatAudio, stopRepeatAudio } from '../components/CommonFunctions';
import { UserContext } from "../components/BaseShot"

let timerList = [];

var isSelected = false;

var loadCount = 0;
var isFinished = false;
var timerInterval;
export default function BaseScene({ nextFunc, _geo, setSuccessNum }) {

    const audioList = useContext(UserContext)


    const redGlow = useRef();
    const greenGlow = useRef();
    const refCorrect = useRef();
    const refInCorrect = useRef();
    const refBaseDiv = useRef();

    const correctList = [useRef(), useRef(), useRef(), useRef()]

    useEffect(() => {
        // refCorrect.current.addClass('movingDownTop1')

        isSelected = false;
        audioList.bodyAudio1.src = returnAudioPath('20_A')
        audioList.bodyAudio2.src = returnAudioPath('20_B')

        isFinished = false;

        loadCount = 0;

        setRepeatAudio(audioList.bodyAudio2)




        timerList[5] = setTimeout(() => {
            audioList.bodyAudio1.play();

            timerList[9] = setTimeout(() => {
                audioList.bodyAudio2.play();
                startRepeatAudio();

            }, audioList.bodyAudio1.duration * 1000 + 300);
        }, 2500);

        timerList[8] = setTimeout(() => {
            refBaseDiv.current.className = 'aniObject'
        }, 2800);

        timerList[9] = setTimeout(() => {
            isFinished = true;
        }, 7000);

        return () => {
            clearTimerList([1, 2, 3, 4, 5, 6, 7, 8, 9])
            clearInterval(timerInterval)
            loadCount = 0

            audioList.windAudio.pause();
            audioList.windAudio.currentTime = 0

            audioList.bodyAudio1.pause();
            audioList.buzzAudio.pause();
            audioList.clapAudio.pause();


            audioList.clapAudio.currentTime = 0;
            audioList.buzzAudio.currentTime = 0;
        }
    }, [])


    function clearTimerList(tList) {
        for (let i = 0; i < tList.length; i++)
            clearTimeout(timerList[tList[i]])
    }

    function loading() {
        loadCount++;
        if (loadCount == 2) {
            refBaseDiv.current.className = 'aniObject'
        }
    }


    function setCorrect() {
        stopRepeatAudio();
        greenGlow.current.setClass('show');
        audioList.bodyAudio1.pause();
        audioList.bodyAudio2.pause();

        clearTimerList([5, 9])


        if (!isSelected) {
            isSelected = true;
            setSuccessNum();

            audioList.buzzAudio.pause();
            clearTimeout(timerList[4])

            audioList.windAudio.play();


            timerList[7] = setTimeout(() => {
                refInCorrect.current.addClass('hide');
            }, 100);

            // refCorrect.current.removeClass('movingDownTop1');
            refBaseDiv.current.style.pointerEvents = 'none';

            timerList[1] = setTimeout(() => {

                audioList.clapAudio.play();

                refCorrect.current.setStyle([{
                    key: 'transition', value: '2.2s'
                },
                {
                    key: 'transform', value: 'translateX(' + _geo.width * 0.22 + 'px) scale(1.2)'
                }
                ]);

                timerList[6] = setTimeout(() => {
                    greenGlow.current.setClass('hideObject')
                }, 1800);
            }, 500);


            timerList[3] = setTimeout(() => {
                nextFunc();
            }, 5500);
        }
    }

    function setError() {

        stopRepeatAudio();
        startRepeatAudio();
        
        audioList.bodyAudio1.pause();
        audioList.bodyAudio1.pause();

        redGlow.current.setClass('show');
        audioList.buzzAudio.play();

        clearTimerList(timerList[5])
        clearTimerList(timerList[9])
    }



    return (
        <div className='hide'
            ref={refBaseDiv}
        >
            <BaseProp
                posInfo={{ w: 0.38, w1: 0.39, l: 0.07, t: 0.15, h: 1 }}
                geo={_geo}
                style={{
                    cursor: 'pointer',
                }}
                clickFunc={setCorrect}
                ref={refCorrect}
            >

                <BaseImage
                    url={"Icons/SB39_Interactive-Icon_SB39_Interactive_Icon_Green_Highlight.svg"}
                    geo={_geo}
                    scale={0.93}
                    posInfo={{ l: 0.035, t: 0.065 }}
                    ref={greenGlow}
                    className='hideObject'
                    style={{ transition: '0.7s' }}
                />

                < BaseImage
                    scale={0.93}
                    posInfo={{ l: 0.035, t: 0.065 }}
                    url={"Icons/SB39_Interactive-Icon_SB39_Interactive_Icon_30.svg"}
                    geo={_geo}
                    onLoad={ loading }
                />
            </BaseProp>

            <BaseProp
                posInfo={{ w: 0.38, w1: 0.39, r: 0.07, t: 0.15, h: 1 }}
                geo={_geo}
                // class='movingTopDown1'
                clickFunc={setError}
                style={{
                    cursor: 'pointer'
                }}
                ref={refInCorrect}
            >
                <BaseImage
                    url={"Icons/SB39_Interactive-Icon_SB39_Interactive_Icon_Red_Highlight.svg"}
                    geo={_geo}
                    scale={0.93}
                    posInfo={{ l: 0.035, t: 0.07 }}
                    ref={redGlow}
                    className='hideObject'
                    style={{ transition: '0.7s' }}
                />

                < BaseImage
                    scale={0.93}
                    posInfo={{ l: 0.035, t: 0.068 }}
                    url={"Icons/SB39_Interactive-Icon_SB39_Interactive_Icon_31.svg"}
                    geo={_geo}
                    onLoad={loading}
                />

            </BaseProp>

        </div >
    );
}
