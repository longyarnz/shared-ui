import React from 'react';
import './primary-button.css';
import ShouldRender from '../../utils/ShouldRender';
import Spinner from '../Spinner';

export default function PrimaryButton(props) {
    const className = props.className || "primary-button";
    const addClass = props.addclass || '';
    const style = {
        width: props.width,
        height: props.height,
        ...props.style
    }

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
            <ShouldRender if={props.icon}>
                <i style={props.iconStyle}>{props.icon}</i>
            </ShouldRender>
            
            <ShouldRender if={!props.icon && props.children}>
                {props.children}
            </ShouldRender>
        </PrimaryButton>
    )
}

export function RoundIconButton(props) {
    const icon = props.icon;
    return (
        <IconButton className="circle-icon-button" icon={icon} {...props} />
    )
}

export function RoundSpinnerButton(props) {
    return (
        <IconButton className="circle-icon-button" {...props}>
            <div>
                <Spinner
                    size={props.spinnerSize}
                    color={props.spinnerColor}
                    colors={props.spinnerColors}
                    duration={props.spinnerDuration}
                    thickness={props.spinnerDepth}
                />
            </div>
        </IconButton>
    )
}

export function TextIconButton(props) {
    const className = props.className || 'text-icon-button';
    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <PrimaryButton {...props} className={className} style={style}>
            <i style={props.iconStyle}>{props.icon}</i>
            <span style={props.textStyle}>{props.text}</span>
        </PrimaryButton>
    )
}

export function LoadingTextButton(props) {
    const text = props.text || 'Loading';

    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <PrimaryButton {...props} className="loading-text-button" style={style}>
            <Spinner
                size={props.spinnerSize}
                color={props.spinnerColor}
                colors={props.spinnerColors}
                duration={props.spinnerDuration}
                thickness={props.spinnerDepth}
            />
            <span style={props.textStyle}>{text}</span>
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