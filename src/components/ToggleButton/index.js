import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import './toggle-button.css';

export default function ToggleButton(props) {
    const [state, setState] = useState(props.on || false);
    const { width = 40, height = 25, color = '#3b73ff' } = props;
    
    const size = height * 0.6, borderRadius = height * 0.5, margin = (size / 0.6 * (0.4 / 2) - 1);
    
    const buttonStyle = {
        borderColor: props.disabled ? '#ccc' : state ? color : '#4D4F5C',
        borderRadius
    }
    
    const spanStyle = {
        height: size,
        width: size,
        marginLeft: state ? `calc(100% - ${size}px - ${margin}px)` : margin,
        backgroundColor: props.disabled ? '#ccc' : state ? color : '#4D4F5C'
    }
    
    const addClass = `toggle-button ${props.addClass || ''} ${props.disabled ? 'disabled' : ''}`;
    
    const toggle = () => {
        if (props.disabled) return;
        
        setState(!state);
        props.onToggle && props.onToggle(!state);
    }
    
    return (
        <PrimaryButton
            style={buttonStyle}
            addClass={addClass}
            onClick={toggle}
            width={width}
            height={height}
            disabled={props.disabled}
        >
            <span style={spanStyle}></span>
        </PrimaryButton>
    )
}
