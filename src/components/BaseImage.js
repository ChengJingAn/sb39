import React, { useRef } from "react";
import "../stylesheets/styles.css"
import { prePathUrl } from "./CommonFunctions";

const BaseImage = (prop, ref) => {

    let style = {
        left: '0px',
        top: '0px',

    };

    const currentRef = useRef();

    let widthScale = '100%'
    if (prop.style) {
        style = { ...style, ...prop.style }
        // if (prop.style.transition == null)
        //     style.transition = '0.7s'
    }


    React.useImperativeHandle(ref, () => ({
        setClass: (className) => {
            currentRef.current.className = "baseImage " + className
        },

        setStyle: (styles) => {
            styles.map(style => {
                currentRef.current.style[style.key] = style.value
            })
        }
        ,  setUrl: (url) => {
            currentRef.current.src = prePathUrl() + "images/" + url
        }

    }))




    if (prop.scale != null)
        widthScale = prop.scale * 100 + "%";

    if (prop.posInfo != null) {
        if (prop.posInfo.l != null)
            style.left = 100 * prop.posInfo.l + '%'
        if (prop.posInfo.t != null)
            style.top = 100 * prop.posInfo.t + '%'
        if (prop.posInfo.b != null)
            style.bottom = 100 * prop.posInfo.b + '%'
    }

    return (
        <img draggable={false}   className={"baseImage " + (prop.className != null ? prop.className : '')}
            width={widthScale}
            src={prePathUrl() + "images/" + prop.url}
            style={style}
            onClick={prop.onClick}
            ref={currentRef}
            onLoad={prop.onLoad}
        />
    )
}

export default React.forwardRef(BaseImage);
