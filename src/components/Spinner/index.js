import React, { useState, useEffect } from 'react';
import './spinner.css';

export default function Spinner(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const x = setTimeout(() => {
            setCounter(counter + 1);
        }, props.duration || 450);

        return () => {
            clearTimeout(x);
        };
    });

    const className = `spinner ${props.addclass || ''}`;

    const color = props.colors
        ? `${props.colors[counter % props.colors.length]} `
        : props.color || '#3b73ff';

    const style = {
        borderColor: `${color.repeat(3)} transparent`,
        width: props.size || 0,
        height: props.size || 0,
        animationDuration: props.duration,
        borderWidth: props.thickness
    };

    return (
        <span className={className} style={style}></span>
    );
}
