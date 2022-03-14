import React, { useState, useEffect, useRef, useContext } from 'react';
import "../stylesheets/styles.css";
import { initialAudio } from '../components/CommonFunctions';
import { UserContext } from '../components/BaseShot';
import Lottie from "react-lottie-segments";
import loadAnimation from '../utils/loadAnimation'


let isGameplaying = false;

let timerList = []
let activeInterval
var isRendered = false;
var isEffectPassed = false;

const animationList = []

loadAnimation('main/airtext.json').then(result => {
    animationList[0] = result;
}, () => { });
loadAnimation('main/ballon.json').then(result => {
    animationList[1] = result;
}, () => { });
loadAnimation('main/BigBallon01.json').then(result => {
    animationList[2] = result;
}, () => { });
loadAnimation('main/BigBallon02.json').then(result => {
    animationList[3] = result;
}, () => { });

loadAnimation('main/RedKite.json').then(result => {
    animationList[4] = result;
}, () => { });


loadAnimation('main/feather01.json').then(result => {
    animationList[5] = result;
}, () => { });
loadAnimation('main/feather02.json').then(result => {
    animationList[6] = result;
}, () => { });
loadAnimation('main/helicopter.json').then(result => {
    animationList[7] = result;
}, () => { });




const Scene1 = React.forwardRef(({ nextFunc, _geo, _baseGeo }, ref) => {

    const audioList = useContext(UserContext)
    const playBtnRef = useRef();
    const titleRef = useRef()
    const baseObject = useRef()

    const airPlaneRef = useRef()
    const helicopterRef = useRef()

    const loopList = [1, 7]
    const [isStopAni, setStopAni] = useState(false)



    useEffect(fomartFunc, [])

    function clickFunc() {
        if (!isGameplaying)
            initialAudio(audioList)

        setTimeout(() => {
            audioList.backAudio.play().catch(error => {
            });
        }, 500);

        setTimeout(() => {
            if (!isGameplaying) {
                isGameplaying = true
            }
            nextFunc();
        }, 200);

    }


    function returnOption(index) {
        return {
            loop: false,
            autoplay: false,
            animationData: animationList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }


    const activeBtnFunc = () => {
        if (!isRendered) {
            setTimeout(() => {
                setStopAni(false)
            }, 1000);

            isRendered = true;

            // setTimeout(() => {
            //     airPlaneRef.current.style.transition = '40s linear'
            //     airPlaneRef.current.style.transform = 'translateX(' + _baseGeo.width * 1.5 + 'px) '
            // }, 300);



            // setTimeout(() => {
            //     helicopterRef.current.style.transition = '40s linear'
            //     helicopterRef.current.style.transform = 'translateX(' + _baseGeo.width * -1.5 + 'px) '

            // }, 1000);


            baseObject.current.className = 'aniObject'

            playBtnRef.current.className = 'introText'

            setTimeout(() => {
                playBtnRef.current.className = 'commonButton'
                playBtnRef.current.style.pointerEvents = ''
            }, 1500);
        }
    }

    const imageLoad = () => {
        if (!isRendered) {
            clearTimeout(timerList[0])
            activeInterval = setInterval(() => {
                if (isEffectPassed) {
                    activeBtnFunc();
                    clearInterval(activeInterval)
                }
            }, 100);
        }
    }

    function fomartFunc() {

        airPlaneRef.current.style.left = _baseGeo.left + _baseGeo.width * -0.3 + 'px';
        helicopterRef.current.style.left = _baseGeo.left + _baseGeo.width * 1 + 'px';

        playBtnRef.current.style.pointerEvents = 'none'
        setStopAni(true)
        timerList[0] = setTimeout(
            activeBtnFunc()
            , 4000);

        isEffectPassed = true;
        isRendered = false;

        return () => {
            audioList.titleAudio.pause();
            audioList.titleAudio.currentTime = 0;

            isRendered = false;
            isEffectPassed = false;

            timerList.forEach(element => {
                clearTimeout(element)
            });
        }
    }

    return (
        <div ref={baseObject} className='hideObject'>
            <div >
                {/* ballen */}
                <div style={{
                    position: "fixed", width: _baseGeo.width * 0.2 + "px",
                    left: (_baseGeo.width * 0.8 + _baseGeo.left) + "px"
                    , bottom: (_baseGeo.top + _baseGeo.height * 0.01) + "px",
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}>
                    <Lottie autoplay loop options={returnOption(1)}
                        mouseDown={false}
                        isStopped={isStopAni}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div
                    ref={airPlaneRef}
                    style={{
                        position: "fixed", width: _baseGeo.width * 0.15 + "px",
                        left: (_baseGeo.width * 0.4 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.7) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    }}>

                    <img
                        draggable={false}
                        width={"100%"}
                        src={'./images/Intro_Page/SB39_Intro_BG _Airoplane.svg'}
                    />

                </div>

                <div
                    ref={helicopterRef}
                    style={{
                        position: "fixed", width: _baseGeo.width * 0.1 + "px",
                        left: (_baseGeo.width * 0.7 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.5) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none',
                    }}>

                    <Lottie autoplay options={returnOption(7)}
                        mouseDown={false}
                        isStopped={true}
                        style={{ transform: 'rotateY(180deg)' }}
                        // isStopped={isStopAni}
                        isClickToPauseDisabled={true}
                    />
                    {/* <img
                        draggable={false}
                        width={"100%"}
                        style={{transform:'rotateY(180deg)'}}
                        
                    />
                        src={'./images/Intro_Page/SB39_Intro_BG _Helicopter .svg'}
                    /> */}

                </div>

                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.15 + "px",
                        left: (_baseGeo.width * 0.6 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.5) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    }}>
                    <Lottie autoplay options={returnOption(2)}
                        mouseDown={false}
                        isStopped={true}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.2 + "px",
                        left: (_baseGeo.width * 0.1 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.4) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    }}>
                    <Lottie autoplay options={returnOption(3)}
                        mouseDown={false}
                        isStopped={true}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.1 + "px",
                        left: (_baseGeo.width * 0.3 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.0) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    }}>
                    <Lottie autoplay options={returnOption(4)}
                        mouseDown={false}
                        isStopped={true}

                        isClickToPauseDisabled={true}
                    />
                </div>

                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.8 + "px",
                        left: (_baseGeo.width * 0.1 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top - _baseGeo.height * 0.6) + "px",
                        pointerEvents: 'none'
                    }}>
                    <Lottie autoplay loop options={returnOption(5)}
                        mouseDown={false}
                        isStopped={true}

                        isClickToPauseDisabled={true}
                    />
                </div>

                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.08 + "px",
                        left: (_baseGeo.width * 0.2 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top - _baseGeo.height * 0.1) + "px",
                        pointerEvents: 'none'
                    }}>
                    <Lottie autoplay loop options={returnOption(6)}
                        mouseDown={false}
                        isStopped={true}
                        isClickToPauseDisabled={true}
                    />
                </div>





                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.05 + "px",
                        left: (_baseGeo.width * 0.7 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.0) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    }}>

                    <img
                        draggable={false}
                        width={"100%"}
                        src={'./images/Intro_Page/SB39_Intro_BG _Kite_02.svg'}
                    />

                </div>



                <div

                    style={{
                        position: "fixed", width: _baseGeo.width * 0.05 + "px",
                        left: (_baseGeo.width * 0.7 + _baseGeo.left) + "px"
                        , bottom: (_baseGeo.top + _baseGeo.height * 0.0) + "px",
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    }}>

                    <img
                        draggable={false}
                        width={"100%"}
                        src={'./images/Intro_Page/SB39_Intro_BG _Kite_02.svg'}
                    />

                </div>

                <div
                    ref={titleRef}
                    style={{
                        position: "fixed", width: _geo.width * 0.4 + "px",
                        left: _geo.left + _geo.width * 0.3 + "px"
                        , top: _geo.height * 0.2 + _geo.top + "px"
                    }}>
                    <Lottie options={returnOption(0)}
                        mouseDown={false}
                        autoplay
                        isStopped={isStopAni}
                        isClickToPauseDisabled={true}
                    />
                </div>

                <div
                    className="hideObject"
                    ref={playBtnRef}
                    style={{
                        position: "fixed", width: _geo.width * 0.12 + "px",
                        left: _geo.width * 0.44 + _geo.left + "px"
                        , bottom: _geo.height * 0.2 + _geo.top + "px"
                    }}
                    onClick={clickFunc}
                >
                    <img
                        draggable={false}
                        width={"100%"}
                        src={'./images/Buttons/Play_blue.svg'}
                    />
                </div>

            </div>
        </div >
    );
});

export default Scene1;
