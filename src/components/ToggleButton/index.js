import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import styles from './toggle-button.module.css';

/**
 * @name ToggleButton
 * @extends `PrimaryButton`
 * @description Renders a toggle button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button: defaults to 40.
 * @param {number} props.height Height of the button: defaults to 25.
 * @param {string} props.onColor Color for the toggle: defaults to #3b73ff when on.
 * @param {string} props.offColor Color for the toggle: defaults to #4d4f5c when off.
 * @param {string} props.defaultValue Default value for initial render.
 * @param {boolean} props.disabled Disables the toggle button.
 * @param {function} props.onToggle onclick event function of the button: receives the state `Boolean` of the toggle as an argument.
 * @returns {JSX.Element} A toggle button.
 */
export default function ToggleButton(props) {
    const [state, setState] = useState(props.defaultValue || false);
    const { width = 40, height = 25, offColor = '#4D4F5C', onColor = '#3b73ff' } = props;
    
    const size = height * 0.6, borderRadius = height * 0.5, margin = (size / 0.6 * (0.4 / 2) - 1);
    
    const buttonStyle = {
        borderColor: props.disabled ? '#ccc' : state ? onColor : offColor,
        borderRadius
    }
    
    const spanStyle = {
        height: size,
        width: size,
        marginLeft: state ? `calc(100% - ${size}px - ${margin}px)` : margin,
        backgroundColor: props.disabled ? '#ccc' : state ? onColor : offColor
    }
    
    const addClass = `${styles['toggle-button']} ${props.addClass || ''} ${props.disabled ? styles['disabled'] : ''}`.trim();
    
    const toggle = () => {
        if (props.disabled) return;
        
        setState(!state);
        props.onToggle && props.onToggle(!state);
    }
    
    return (
        <PrimaryButton
            style={buttonStyle}
            className={addClass}
            onClick={toggle}
            width={width}
            height={height}
            disabled={props.disabled}
        >
            <span style={spanStyle}></span>
        </PrimaryButton>
    )
}
