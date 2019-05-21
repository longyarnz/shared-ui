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
 * @param {boolean} props.defaultValue Boolean value to set the initial state of the tile.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `PrimaryButton` with secondary-button style.
 */
export default function Tile(props) {
    const [toggle, setToggle] = useState(props.defaultValue || false);
    const button = useRef(null);
    const bgColor = useRef(false);
    const { color = '#3b73ff' } = props;

    useEffect(() => {
        bgColor.current = !bgColor.current ? button.current.style.color : bgColor.current;
        let { current } = bgColor;
        current = !current ? button.current.style.color : current
        const opaqueColor = `rgba(${current.slice(4, current.length - 1)}, .03)`;
        const darkColor = `rgba(${current.slice(4, current.length - 1)}, .125)`;
        button.current.style.backgroundColor = toggle ? darkColor : opaqueColor;
    });

    const activateTile = () => {
        props.onClick && props.onClick(!toggle);
        setToggle(!toggle);
    }

    const style = {
        color,
        borderColor: toggle ? color : 'transparent',
        backgroundColor: toggle ? color : '#fff'
    }

    return (
        <PrimaryButton {...props} onClick={activateTile} style={style} ref={button} />
    )
}