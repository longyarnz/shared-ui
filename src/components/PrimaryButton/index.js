import React from 'react';
import './primary-button.css';

export default function PrimaryButton(props) {
    const style = {
        width: props.width,
        height: props.height,
        ...props.style
    }
    const className = props.className || "primary-button";
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

export function IconButton(props) {
    const className = props.className || "icon-button";
    return (
        <PrimaryButton className={className} {...props}>
            <i style={props.iconStyle}>{props.icon}</i>
        </PrimaryButton>
    )
}

export function RoundIconButton(props) {
    return (
        <IconButton className="circle-icon-button" icon="donut_large" {...props} />
    )
}

export function TextIconButton(props) {
    const className = props.className || 'text-icon-button';
    const iconName = props.icon || 'donut_large';
    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <PrimaryButton className={className} style={style} {...props}>
            <i style={props.iconStyle}>{iconName}</i>
            <span style={props.textStyle}>{props.text}</span>
        </PrimaryButton>
    )
}

export function SuccessButton(props) {
    return (
        <TextIconButton className="success-button" icon="check" text="Success" {...props} />
    )
}

export function DangerButton(props) {
    return (
        <TextIconButton className="danger-button" icon="close" text="Danger" {...props} />
    )
}