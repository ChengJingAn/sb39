import "../stylesheets/styles.css";
import { useEffect, useState, useRef, useContext } from "react";
import BaseImage from "../components/BaseImage"
import { UserContext } from "../components/BaseShot";
import { returnAudioPath } from "../components/CommonFunctions"

let timerList = []
export default function Scene3({ nextFunc, _geo }) {
    const audioList = useContext(UserContext)
    const characterList = [
        '09', '11', '10', '15', '14', '13', '12', '17', '18', '16'
    ]


    const characterRefList = Array.from({ length: 10 }, ref => useRef())

    const posList = [
        { l: 0.15, t: 0.04 },
        { l: 0.4, t: 0.04 },
        { l: 0.65, t: 0.04 },

        { l: 0.05, t: 0.35 },
        { l: 0.28, t: 0.35 },
        { l: 0.53, t: 0.35 },
        { l: 0.77, t: 0.35 },

        { l: 0.15, t: 0.64 },
        { l: 0.4, t: 0.64 },
        { l: 0.65, t: 0.64 },
    ]

    useEffect(() => {


        audioList.bodyAudio1.src = returnAudioPath('08');

        timerList[0] = setTimeout(() => {
            audioList.bodyAudio1.play();
            timerList[1] = setTimeout(() => {
                nextFunc();

            }, audioList.bodyAudio1.duration * 1000 + 2000);
        }, 2000);

        characterRefList.map((character, index) => {
            setTimeout(() => {
                character.current.setClass('aniObject')
            }, (600   - index * 30)* index );
        })

        return () => {
            timerList.map(timer => {
                clearTimeout(timer)
            })

            audioList.bodyAudio1.pause()

        }
    }, [])

    return (
        <div

            style={{
                position: "fixed",
                width: _geo.width + "px",
                height: _geo.height + "px",
                left: _geo.left + "px"
                , top: _geo.bottom + "px",
            }}>
            {
                characterList.map(
                    (character, index) =>
                        <BaseImage
                            ref={characterRefList[index]}
                            scale={0.18}
                            posInfo={posList[index]}
                            url={"Icons/SB39_Interactive-Icon_SB39_ Icon_" + character + ".svg"}
                            className={'hideObject'}
                        />
                )
            }
        </div>
    );
}
