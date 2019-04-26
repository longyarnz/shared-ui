import React from 'react';
import PrimaryButton from '../PrimaryButton';
import 'toggle-button.css';

export default function ToggleButton(props) {
    const toggleButtonState = () => {

    }

    return (
        <PrimaryButton {...props} className="toggle-button" onClick={toggleButtonState}>
            <span>ON</span>
            <span>OFF</span>
        </PrimaryButton>
    )
}
