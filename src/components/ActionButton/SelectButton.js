/**
 * @fileoverview A collection of React components that render buttons that toggle a dropdown list.
 * @exports JSX.Element
 */
import React, { useRef, useState, useEffect } from 'react';
import { TextIconButton } from '../PrimaryButton';

/**
 * @name SelectButton
 * @description Renders a HTML Button element and a dropdown list into a parent container;
 * @extends `TextIconButton`
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {string} props.listClass Add extra class styles to overwrite default class of the dropdown list.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {object} props.dropdownStyle Style Inline CSS styles for the dropdown list.
 * @param {JSX.Element} props.children HTML list elements such as `<li></li>`, `<ol></ol>`, 
 *     `<option></option>` rendered as dropdown list elements.
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A `button` and a dropdown list toggled by the `button`.
 */
export function SelectButton(props) {
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState(null);
    const ul = useRef(null);
    const valueRef = useRef(null);
    
    useEffect(() => {
        valueRef.current = toggle;
        const listElements = Array.from(ul.current.children);
        
        const onClickElement = e => {
            listElements.forEach(element => element.classList.remove('selected'));
            const value = e.target.getAttribute('value');
            setValue(value);
            e.target.classList.add('selected');
            toggleDropdown();
        }
    
        listElements.forEach(element => element.onclick = onClickElement);
    });

    
    const toggleDropdown = () => {
        const toggle = valueRef.current;
        setToggle(!toggle);
        const numberOfChildren = Array.from(ul.current.children).length;
        let childHeight = props.childHeight || 40;
        childHeight = toggle ? childHeight : 0;
        ul.current.style.minHeight = `${numberOfChildren * childHeight}px`;
        ul.current.style.borderWidth = toggle ? '1px' : '0px';
    };
    
    const onClick = () => {
        toggleDropdown();
        props.onClick && props.onClick();
    }

    const iconName = toggle ? 'arrow_drop_down' : 'close';

    const text = value || props.placeholder;

    const addClass = `select-button ${props.addClass || ''}`;

    const listClass = `select-list ${props.listClass || ''}`;

    return (
        <>
            <TextIconButton
                {...props}
                addClass={addClass}
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

/**
 * @name Dropdown
 * @description Renders a HTML Button element and a dropdown list into a parent container;
 * @extends `SelectButton`
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {string} props.listClass Add extra class styles to overwrite default class of the dropdown list.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {object} props.dropdownStyle Style Inline CSS styles for the dropdown list.
 * @param {JSX.Element} props.children HTML list elements such as `<li></li>`, `<ol></ol>`, 
 *     `<option></option>` rendered as dropdown list elements.
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A `SelectButton` and dropdown list with a different CSS styling.
 */
export function Dropdown(props) {
    const addClass = `dropdown ${props.addClass || ''}`;
    const listClass = `dropdown-list ${props.listClass || ''}`;

    return (
        <SelectButton addClass={addClass} listClass={listClass} placeholder={props.placeholder}>
            {props.children}
        </SelectButton>
    )
}