/**
 * @fileoverview A collection of React components that render buttons that toggle a dropdown list.
 * @exports JSX.Element
 */
import React, { useRef, useState, useEffect } from 'react';
import { TextIconButton } from '../PrimaryButton';
import styles from './dropdown.module.css';

/**`    
 * @name SelectButton
 * @description Renders a HTML Button element and a dropdown list into a parent container;
 * @extends `TextIconButton`
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {string} props.listClass Add extra class styles to overwrite default class of the dropdown list.
 * @param {string} props.placeholder Placeholder text for the button.
 * @param {string} props.defaultValue Default value for initial render.
 * @param {object} props.textStyle Inline CSS styles for the button text.
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
    const [value, setValue] = useState(props.defaultValue);
    const div = useRef(null);
    const valueRef = useRef(null);
    
    useEffect(() => {
        valueRef.current = toggle;
        const listElements = Array.from(div.current.children);
        
        const onClickElement = !props.preventDefaultClick 
            ?   e => {
                const value = e.target.getAttribute('value');
                setValue(value);
                props.onSelect && props.onSelect(value);
                toggleDropdown();
            } 
            :  null;
    
        listElements.forEach(element => {
            element.onclick = onClickElement;
            element.classList.remove(styles['selected']);
            element.toggleDropdown = toggleDropdown;
            element.getAttribute('value') === value 
                && element.classList.add(styles['selected']);
        });

        const numberOfChildren = Array.from(div.current.children).length;
        const childHeight = props.childHeight || 40;
        div.current.style.height = `${numberOfChildren * childHeight}px`;
        div.current.parentElement.style.borderColor = !toggle ? null : 'transparent';
    });

    
    const toggleDropdown = () => {
        const toggle = valueRef.current;
        setToggle(!toggle);
        const numberOfChildren = Array.from(div.current.children).length;
        let childHeight = props.childHeight || 40;
        childHeight = toggle ? childHeight : 0;
        div.current.parentElement.style.minHeight = `${numberOfChildren * childHeight}px`;
    };
    
    const onClick = () => {
        toggleDropdown();
        props.onClick && props.onClick();
    }

    let CustomIcon = props.customIcon; 
    CustomIcon = CustomIcon 
        ?   <CustomIcon toggleDropdown={toggleDropdown} /> 
        :   null;

    const iconName = toggle ? props.iconName || 'keyboard_arrow_down' : 'close';

    const text = value || props.placeholder;

    const addClass = `${styles['select-button']} ${props.addClass || ''}`;

    const listClass = `${styles['select-list']} ${props.listClass || ''}`.trim();

    return (
        <div className={styles['select-button-container']}>
            <TextIconButton
                {...props}
                className={addClass}
                icon={iconName}
                text={text}
                onClick={onClick}
                onClickIcon={onClick}
                customIcon={CustomIcon}
            />

            <div className={listClass} style={props.dropdownStyle}>
                <div ref={div}>
                    {props.children}
                </div>
            </div>
        </div>
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
    const addClass = props.addClass || styles['dropdown'];
    const listClass = `${styles['dropdown-list']} ${props.listClass || ''}`;

    return (
        <SelectButton {...props} addClass={addClass} listClass={listClass} placeholder={props.placeholder} />
    )
}