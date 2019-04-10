import React from 'react';
import PrimaryButton from '../PrimaryButton';
import './secondary-button.css';

export default function SecondaryButton(props) {
    return (
        <PrimaryButton className="secondary-button" {...props} />
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
