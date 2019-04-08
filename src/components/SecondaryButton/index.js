import React from 'react';
import './secondary-button.css';

export default function SecondaryButton(props) {
    const style = {
        width: props.width,
        height: props.height,
        padding: props.padding,
        ...props.style
    }
    const className = props.className || "secondary-button";
    const addClass = props.addclass || '';

    return (
        <button
            style={style}
            {...props}
            className={`${className} ${addClass}`}
        >
            {props.children || props.text}
        </button>
    )
}

export function NormalSecondaryButton(props) {
    return (
        <SecondaryButton className="normal-secondary-button" text={props.text} {...props} />
    )
}

export function SuccessSecondaryButton(props) {
    return (
        <SecondaryButton className="success-secondary-button" text={props.text} {...props} />
    )
}

export function DangerSecondaryButton(props) {
    return (
        <SecondaryButton className="danger-secondary-button" text={props.text} {...props} />
    )
}
