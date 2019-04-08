import React, { useRef, useState, useEffect } from 'react';
import { TextIconButton } from '../PrimaryButton';

export function SelectButton(props) {
    const ul = useRef(null);
    const valueRef = useRef(null);
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState(null);

    useEffect(() => {
        valueRef.current = toggle;
    });

    useEffect(() => {
        const listElements = Array.from(ul.current.children);

        const onClickElement = e => {
            listElements.forEach(element => element.classList.remove('selected'));
            const value = e.target.getAttribute('value');
            setValue(value);
            e.target.classList.add('selected');
            toggleDropdown();
        }

        listElements.forEach(element => element.onclick = onClickElement);
    }, []);

    const toggleDropdown = () => {
        const toggle = valueRef.current;
        setToggle(!toggle);
        const numberOfChildren = Array.from(ul.current.children).length;
        let childHeight = props.childHeight || 40;
        childHeight = toggle ? childHeight : 0;
        ul.current.style.minHeight = `${numberOfChildren * childHeight}px`;
        ul.current.style.borderWidth = toggle ? '1px' : '0px';
    }

    const onClick = () => {
        toggleDropdown();
        props.onClick && props.onClick();
    }

    const iconName = toggle ? 'arrow_drop_down' : 'close';

    const text = value || props.placeholder;

    const addClass = `select-button ${props.addclass || ''}`;

    const listClass = `select-list ${props.listclass || ''}`;

    return (
        <>
            <TextIconButton
                {...props}
                addclass={addClass}
                icon={iconName}
                text={text}
                onClick={onClick}
            />

            <ul className={listClass} style={props.dropdownStyle} ref={ul}>
                {props.children}
            </ul>
        </>
    )
}

export function Dropdown(props) {
    return (
        <SelectButton addclass="dropdown" listclass="dropdown-list" placeholder={props.placeholder}>
            <option value="Selected 1">Select 1</option>
            <option value="Selected 2">Select 2</option>
            <option value="Selected 3">Select 3</option>
            <option value="Selected 4">Select 4</option>
            <option value="Selected 5">Select 5</option>
        </SelectButton>
    )
}