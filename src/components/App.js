
import React, { useContext, useState, useEffect, useRef } from 'react';
import BaseImage from './BaseImage';
import Scene1 from "../Scenes/scene1";
import Scene2 from "../Scenes/scene2";
import Scene3 from "../Scenes/scene3";
import Scene4 from "../Scenes/scene4";
import Scene5 from "../Scenes/scene5";
import Scene6 from "../Scenes/scene6";
import Scene7 from "../Scenes/scene7";
import Scene8 from "../Scenes/scene8";
import Scene9 from "../Scenes/scene9";
import Scene10 from "../Scenes/scene10";
import Scene11 from "../Scenes/scene11";
import Scene12 from "../Scenes/scene12";
import Scene13 from "../Scenes/scene13";
import Scene14 from "../Scenes/scene14";
import Scene15 from "../Scenes/scene15";
import Scene16 from "../Scenes/scene16";
import Scene17 from "../Scenes/scene17";
import Scene18 from "../Scenes/scene18";
import Scene19 from "../Scenes/scene19";
import Scene20 from "../Scenes/scene20";
import Scene21 from "../Scenes/scene21";
import Scene22 from "../Scenes/scene22";
import Scene23 from "../Scenes/scene23";

import Excellent from "../Scenes/excellent";

import Welldone from "../Scenes/welldone";

import "../stylesheets/styles.css";
import { UserContext } from './BaseShot';

const Switch = props => {
  const { test, children } = props
  // filter out only children with a matching prop
  return children.find(child => {
    return child.props.value === test
  })
}

var __geo;
var backgroundImageIndex = 0;
var backgroundImageList = [
  "SB39_Intro_BG ", //1
  "SB39_Sky_BG_01",//2
  "SB39_Sky_BG_06",//3 
  "SB39_Enviroment_BG",//4
  "SB39_Garden_BG",//5
  "SB39_Sky_BG_04", //6
  "SB39_Sky_BG_01", //7
  "SB39_Sky_BG_05", // 8
  "SB39_Sky_BG_03", // 9

  "SB39_Sky_BG_05", //10
  "SB39_Sky_BG_05", //11
  "SB39_Sky_BG_05", //12
  "SB39_Sky_BG_05", //13
  "SB39_Sky_BG_05", //14
  "SB39_Sky_BG_05", //15

  "SB_37_Well-Done_BG", //12

  "SB39_Sky_BG_01", //13
  "SB39_Burning_tar_BG",//14

  "SB39_Factory_With_Smoke_BG", //15
  "SB39_Smoke_From_Vehicles_BG", //16
  "SB39_Burning_Garbage_BG", //17
  "SB39_Smoke _From_Firecrackers_BG", //18
  "SB39_Burning_Grass_BG", //19

  "SB39_Sky_BG_01", //20,
  "SB_37_Well-Done_BG" //last
];

var GameisStop = false
var isNextSiganl = false;

const App = ({ geo, _setBackground, __controlBacksound, _startTransition,
  baseGeo, _isBackloaded
}, ref) => {

  const [index, setIndex] = useState(0);
  const [successList, setsuccessList] = useState(0);
  const [_isBackSoundPlaying, _setBackgroundPlaying] = useState(true);
  const musicRef = useRef();

  const _audioList = useContext(UserContext)
  __geo = geo;

  useEffect(
    () => {
      return () => {
      }
    }, []
  )

  function controlBacksound() {
    __controlBacksound();
    if (_isBackSoundPlaying) {
      _setBackgroundPlaying(false);
    }
    else {
      _setBackgroundPlaying(true);
    }
  }


  const transitionSceneList = [3, 8, 15]
  function changeBackgroundImage(judgeNum) {
    let sendNum = -1;
    if (judgeNum == 0)
      sendNum = 0;
    if (transitionSceneList.includes(judgeNum))
      sendNum = 1;
    if (judgeNum != backgroundImageIndex) {
      backgroundImageIndex = judgeNum;
      _setBackground(backgroundImageList[judgeNum], sendNum);
    }
  }

  function setFomart(judgeNum) {
    if (judgeNum == 1) {
      musicRef.current.className = 'introText'
      setTimeout(() => {
        musicRef.current.className = 'commonButton'
      }, 1500);
    }

    setIndex(judgeNum)

    changeBackgroundImage(judgeNum);
    if (judgeNum > 8 && judgeNum < 13)
      setsuccessList(judgeNum - 9)
  }

  function _setsuccessList() {
    setsuccessList(successList + 1)
  }

  React.useImperativeHandle(ref, () => ({
    nextFunc: () => {
      setFomart(1);
    },
    gameStop: (val) => {
      GameisStop = val
      if (!GameisStop && isNextSiganl) {
        setTimeout(() => {
          setFomart(index + 1);
          isNextSiganl = false;
        }, 1000);

      }


    },
  }))



  function nextFunc() {
    isNextSiganl = true;
    if (!GameisStop) {
      isNextSiganl = false;
      setFomart(index + 1);
    }
  }

  function goHome() {
    backgroundImageIndex = 0;
    _audioList.backAudio.pause();
    _audioList.backAudio.currentTime = 0;

    musicRef.current.className = 'hideObject'
    setIndex(0);
    _setBackground(backgroundImageList[0])
  }


  return (
    <div >
      {<div className={_isBackloaded ? 'aniObject' : 'hideObject'}>
        <Switch test={index}>
          <Scene1 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={0} />
          <Scene2 nextFunc={nextFunc} _baseGeo={baseGeo} startTransition={_startTransition} _geo={__geo} value={1} />
          <Scene3 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={2} />
          <Scene4 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={3} />
          <Scene5 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={4} />
          <Scene6 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={5} />
          <Scene7 nextFunc={nextFunc} _baseGeo={baseGeo} startTransition={_startTransition} _geo={__geo} value={6} />
          <Scene8 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={7} />

          <Scene9 nextFunc={nextFunc} _baseGeo={baseGeo} startTransition={_startTransition} _geo={__geo} value={8} />

          <Scene10 nextFunc={nextFunc} _baseGeo={baseGeo} setSuccessNum={_setsuccessList} _geo={__geo} value={9} />
          <Scene11 nextFunc={nextFunc} _baseGeo={baseGeo} setSuccessNum={_setsuccessList} _geo={__geo} value={10} />
          <Scene12 nextFunc={nextFunc} _baseGeo={baseGeo} setSuccessNum={_setsuccessList} _geo={__geo} value={11} />
          <Scene13 nextFunc={nextFunc} _baseGeo={baseGeo} setSuccessNum={_setsuccessList} _geo={__geo} value={12} />
          <Scene14 nextFunc={nextFunc} _baseGeo={baseGeo} setSuccessNum={_setsuccessList} _geo={__geo} value={13} />
          <Scene15 nextFunc={nextFunc} _baseGeo={baseGeo} setSuccessNum={_setsuccessList} _geo={__geo} value={14} />

          <Welldone nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={15} />

          <Scene16 nextFunc={nextFunc} startTransition={_startTransition} _baseGeo={baseGeo} _geo={__geo} value={16} />

          <Scene17 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={17} />
          <Scene18 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={18} />
          <Scene19 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={19} />
          <Scene20 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={20} />
          <Scene21 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={21} />
          <Scene22 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={22} />
          <Scene23 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={23} />

          <Excellent nextFunc={goHome} _geo={__geo} value={24} />

        </Switch>
      </div>
      }

      {index > 8 && index < 15 &&
        <div style={{
          pointerEvents: 'none',
          userSelect: 'none'

        }} className='aniObject'>
          <div style={{
            position: "fixed", width: __geo.width * 0.28 + "px",
            right: (__geo.width * 0.005) + "px"
            , top: (__geo.height * 0.01) + "px"
          }}  >
            <img draggable={false} width={"100%"} src={'./images/Icons/SB39_Interactive-Icon_SB39_Progress_Bar.svg'} />
          </div>

          <div style={{
            position: "fixed", width: __geo.width + "px",
            height: __geo.height + "px",
            right: 0 + "px"
            , top: 0 + "px"
          }}
          >
            {
              Array.from(Array(6).keys()).map(value =>
                < BaseImage
                  scale={0.035}
                  posInfo={{
                    l: 0.735 + 0.042 * value,
                    t: 0.03
                  }}
                  url={'Icons/' + (successList > value ? 'SB39_Interactive-Icon_SB39_Progress_Bar_Yellow_Star.svg'
                    : 'SB39_Interactive-Icon_SB39_Progress_Bar_Gray_Star.svg')} />
              )
            }

          </div>

        </div>
      }


      {index > 0 && index < 9 &&
        <div className='aniObject'>
          <div
            className='commonButton'
            style={{
              position: "fixed", width: __geo.width * 0.06 + "px",
              right: "2%"
              , bottom: "2%", cursor: "pointer",
            }}

            onClick={() => {
              setTimeout(() => {
                _startTransition(2)
                setTimeout(() => {
                  _audioList.wooAudio.play();
                  setFomart(9)
                }, 300);
              }, 200);
            }}
          >
            <img draggable={false}
              width={"100%"} className='playBtn'
              src={'./Images/Buttons/Skip_blue.svg'}
            />
          </div>
        </div>
      }


      <div
        ref={musicRef}
        className='hideObject'
        onClick={controlBacksound}
        style={{
          position: "fixed", width: __geo.width * 0.055 + "px",
          height: __geo.width * 0.055 + "px",
          left: 2 + "%",
          top: "46%",
          cursor: 'pointer',
        }}>
        <img

          width={"100%"}
          draggable={false}
          src={"./images/Buttons/" + (!_isBackSoundPlaying ? "Audio_mute" : "Audio_unmute") + ".svg"}
        />
      </div>
    </div >
  );
}

export default React.forwardRef(App);
