import React, { useRef, useState } from 'react';
import { TextIconButton } from '../PrimaryButton';

export function SelectButton(props) {
    const ul = useRef(null);
    const [toggle, setToggle] = useState(true);

    const onClick = () => {
        setToggle(!toggle);
        const numberOfChildren = Array.from(ul.current.children).length;
        let childHeight = props.childHeight || 40 ;
        childHeight = toggle ? childHeight : 0;
        ul.current.style.minHeight = `${numberOfChildren * childHeight}px`;
        props.onClick && props.onClick();
    }

    const iconName = toggle ? 'arrow_drop_down' : 'close';

    return (
        <>
            <TextIconButton
                {...props}
                addclass="select-button"
                icon={iconName}
                text={props.text}
                onClick={onClick}
            />

            <ul className="select-list" ref={ul}>
                <li>Select 1</li>
                <li>Select 2</li>
                <li>Select 3</li>
                <li>Select 4</li>
                <li>Select 5</li>
            </ul>
        </>
    )
}
