import React from 'react';

export default function Icon(props) {
    const style = {
        width: props.width,
        height: props.height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px',
        padding: '0px',
        ...props.container
    };

    return (
        <div style={style} onClick={props.onClick}>
            <i className={`material-icons ${props.className || ''}`} style={props.style}>
                {props.name}
            </i>
        </div>
    )
}

export function ColorIcon(props) {
    return <Icon {...props} style={{ ...props.style, color: props.color }} />
}