import React, { useState, useEffect, useRef } from 'react';
import PrimaryButton from '../PrimaryButton';

/**
 * @name Tile
 * @extends `PrimaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `PrimaryButton` with secondary-button style.
 */
export default function Tile(props) {
    const [toggle, setToggle] = useState(props.defaultState || false);
    const button = useRef(null);
    const bgColor = useRef(false);
    const { color = '#3b73ff' } = props;

    useEffect(() => {
        bgColor.current = !bgColor.current ? button.current.style.color : bgColor.current;
        let { current } = bgColor;
        current = !current ? button.current.style.color : current
        const opaqueColor = `rgba(${current.slice(4, current.length - 1)}, .05)`;
        const darkColor = `rgba(${current.slice(4, current.length - 1)}, .175)`;
        button.current.style.backgroundColor = toggle ? darkColor : opaqueColor;
    });

    const activateTile = () => {
        setToggle(!toggle);
    }

    const style = {
        color,
        borderColor: toggle ? color : 'transparent',
        backgroundColor: toggle ? color : '#fff'
    }

    return (
        <PrimaryButton onClick={activateTile} {...props} style={style} ref={button} />
    )
}